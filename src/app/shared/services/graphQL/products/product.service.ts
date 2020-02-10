import { Injectable } from '@angular/core';
import { CreateProductGQL, Products, Product_Categories, Products_Insert_Input, Product_Categories_Obj_Rel_Insert_Input, CreateProductMutationVariables, GetProductsDocument, GetProductsGQL } from 'src/generated/graphql';
import { CrudStore } from 'src/app/core/store/crud/crud.store';
import { CRUD_MODE } from 'src/app/shared/enums';
import { CacheHelperService, CACHE_ACTION } from 'src/app/core/graphql/helpers/cache-helper.service';
import { map } from 'rxjs/operators';
import { IsLoadingService } from '@service-work/is-loading';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private createProductGQL: CreateProductGQL, private getProductsService: GetProductsGQL, private crudStore: CrudStore, private isLoadingService: IsLoadingService) { }

  createProduct(product: Products_Insert_Input, category: Product_Categories) {

    const categoryVars: Product_Categories_Obj_Rel_Insert_Input = {
      data: {
        name: category ? category.name : null,
        colour: category ? category.colour : null
      }


    }


    const vars: CreateProductMutationVariables = {
      product: [{
        name: product.name,
        favourite: product.favourite,
        description: product.description,
        category_id: product.category_id ? product.category_id : null,
        category: category ? categoryVars : null
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
    });


  }

  getProducts() {

    return this.getProductsService.watch()
      .valueChanges
      .pipe(map(res => res.data.products));
  }
}
