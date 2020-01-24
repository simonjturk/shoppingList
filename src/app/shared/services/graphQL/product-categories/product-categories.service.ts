import { Injectable } from '@angular/core';
import { GetAllCategoriesDocument, GetAllCategoriesGQL, Product_Categories, CreateProductCategoriesGQL, Product_Categories_Insert_Input, CreateProductCategoriesMutationVariables } from 'src/generated/graphql';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CrudStore } from 'src/app/core/store/crud/crud.store';
import { CRUD_MODE } from 'src/app/shared/enums';

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

        // Read the data from our cache for this query. making sure to send the parameters to the gql to correctly map to the store
        const existing: any = cache.readQuery({ query: GetAllCategoriesDocument });

        //get our latest shopping list just inserted
        const newCategory = data.insert_product_categories.returning[0];

        // Add our shopping list from the mutation to the end.
        cache.writeQuery({
          query: GetAllCategoriesDocument,
          data: { product_categories: [newCategory, ...existing.product_categories] }
        })

        //update our internal crud store
        this.crudStore.setProductCategory(newCategory as Product_Categories, CRUD_MODE.Create)
      }
    })
  }

}
