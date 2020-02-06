import { Injectable } from '@angular/core';
import { GetAllCategoriesDocument, GetAllCategoriesGQL, Product_Categories, CreateProductCategoriesGQL, Product_Categories_Insert_Input, CreateProductCategoriesMutationVariables } from 'src/generated/graphql';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CrudStore } from 'src/app/core/store/crud/crud.store';
import { CRUD_MODE } from 'src/app/shared/enums';
import { CacheHelperService, CACHE_ACTION } from 'src/app/core/graphql/helpers/cache-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {

  constructor(private crudStore: CrudStore, private getAllCategoriesGQL: GetAllCategoriesGQL, private createProductCategoriesGQL: CreateProductCategoriesGQL) { }


  getAllCategories(): Observable<Product_Categories[]> {

    return this.getAllCategoriesGQL.watch()
      .valueChanges
      .pipe(map(c => c.data.product_categories)) as Observable<Product_Categories[]>
  }


  createProductCategories(categoryInput: Product_Categories_Insert_Input) {
    const vars: CreateProductCategoriesMutationVariables = {
      args: [categoryInput]
    }


    return this.createProductCategoriesGQL.mutate(vars, {
      update: (cache, { data }) => {


        const cacheHelper: CacheHelperService = new CacheHelperService(cache, data);

        cacheHelper.manageCache([
          {
            type: CACHE_ACTION.INSERT,
            queryDocument: GetAllCategoriesDocument,
            variables: []
          }]);

        //update our internal crud store
        this.crudStore.setProductCategory(data.insert_product_categories.returning[0] as Product_Categories, CRUD_MODE.Create)
      }
    })
  }

}
