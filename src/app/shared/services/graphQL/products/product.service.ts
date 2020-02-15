import { Injectable } from '@angular/core';
import { CreateProductGQL, Products, Product_Categories, Products_Insert_Input, Product_Categories_Obj_Rel_Insert_Input, CreateProductMutationVariables, GetProductsDocument, GetProductsGQL, Products_Set_Input, GetProductsQueryVariables } from 'src/generated/graphql';
import { CrudStore } from 'src/app/core/store/crud/crud.store';
import { CRUD_MODE } from 'src/app/shared/enums';
import { CacheHelperService, CACHE_ACTION } from 'src/app/core/graphql/helpers/cache-helper.service';
import { map } from 'rxjs/operators';
import { IsLoadingService } from '@service-work/is-loading';
import { Observable } from 'rxjs';
import { DataService } from '../../data/DataService';






@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService<Products> {


  constructor(private createProductGQL: CreateProductGQL, private getProductsService: GetProductsGQL, private crudStore: CrudStore, private isLoadingService: IsLoadingService) {

    super();
  }

  /**
   * Inherited methods
   * 
   */


  create(product: Products_Insert_Input): Observable<Products[]> {
    const vars: CreateProductMutationVariables = {
      product: [{
        name: product.name,
        favourite: product.favourite,
        description: product.description,
        category_id: product.category_id ? product.category_id : null,

      }]


    }


    return this.createProductGQL.mutate(vars, {
      update: (cache, { data }) => {


        const cacheHelper: CacheHelperService = new CacheHelperService(cache, data);

        cacheHelper.manageCache([
          {
            type: CACHE_ACTION.INSERT,
            queryDocument: GetProductsDocument,
            variables: []
          }]);

        //update our crud store
        this.crudStore.setProduct(data.insert_products.returning[0] as Products, CRUD_MODE.Create)

      }
    }).pipe(map(res => res.data.insert_products.returning as Products[]));



  }

  readSingle(id: string): Observable<Products> {
    throw new Error("Method not implemented.");

  }
  readAll(): Observable<Products[]> {
    return this.getProductsService.watch()
      .valueChanges
      .pipe(map(res => res.data.products as Products[]));
  }

  search<Y>(searchObject: Y): Observable<Products[]> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Observable<Products[]> {
    throw new Error("Method not implemented.");
  }
  update<Y>(updateObject: Y): Observable<Products[]> {
    throw new Error("Method not implemented.");
  }

}
