import { Injectable } from '@angular/core';
import { CreateProductGQL, Products, Product_Categories, Products_Insert_Input, Product_Categories_Obj_Rel_Insert_Input, CreateProductMutationVariables, GetProductsDocument } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private createProductGQL: CreateProductGQL) { }

  createProduct(product: Products, category: Product_Categories) {

    const categoryVars: Product_Categories_Obj_Rel_Insert_Input = {
      data: {
        name: category.name,
        colour: category.colour
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


    this.createProductGQL.mutate(vars, {
      update: (cache, { data }) => {

        // Read the data from our cache for this query. making sure to send the parameters to the gql to correctly map to the store
        const existingProduct: any = cache.readQuery({ query: GetProductsDocument });

        //get our latest shopping list just inserted
        const newProduct = data.insert_products.returning[0];

        // Add our shopping list from the mutation to the end.
        cache.writeQuery({
          query: GetProductsDocument,
          data: { products: [newProduct, ...existingProduct.products] }
        })
      }
    });


  }
}
