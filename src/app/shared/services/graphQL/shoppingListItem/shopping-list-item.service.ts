import { Injectable } from '@angular/core';
import { 
  CreateShoppingListItemGQL, 
  GetProductsGQL, 
  CreateShoppingListItemMutationVariables, 
  UpdateShopingListItemGQL,
  UpdateShopingListItemMutationVariables, 
  Shopping_List_Items_Set_Input,
  GetShoppingListItemsGQL,
  GetShoppingListItemsDocument,
  GetShoppingListItemsQueryVariables
} from 'src/generated/graphql';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListItemService {

  constructor(
    private gqlService: CreateShoppingListItemGQL, 
    private productsService: GetProductsGQL, 
    private updateShopingListItemGQL:UpdateShopingListItemGQL,
    private getShopingListItemGQL:GetShoppingListItemsGQL) { }

  getShoppingListItems(shoppingListId:string) {

    const vars:  GetShoppingListItemsQueryVariables = {
      shoppingListId:shoppingListId
    }

    return this.getShopingListItemGQL.watch(vars)
    .valueChanges
    .pipe(map(res=> res.data.shopping_list_items));
  }



  createShoppingListItem (shoppingListId:string, productId: string, quantity: number ){
    const args: CreateShoppingListItemMutationVariables = 
    {
      shoppingListItems:[{
        shopping_list_id: shoppingListId,
        product_id: productId,
        quantity: quantity
      }]
    }
   
   
    return this.gqlService.mutate(args,{
      update: (cache, {data}) => {

        // Read the data from our cache for this query. making sure to send the parameters to the gql to correctly map to the store
        const existingShoppingListItems:any = cache.readQuery({ query: GetShoppingListItemsDocument , variables: {shoppingListId: shoppingListId}});

        //get our latest shopping list just inserted
        const newShoppingListItems = data.insert_shopping_list_items.returning[0];
        
        // Add our shopping list from the mutation to the end.
        cache.writeQuery({
          query:GetShoppingListItemsDocument,
          data: {shopping_list_items:[newShoppingListItems, ...existingShoppingListItems.shopping_list_items]} ,
          variables: {shoppingListId: shoppingListId}
        })
      }
    });
  }

  getProducts(){

    return this.productsService.fetch();
  }

  updateShoppingListItem(id: string, changes: Shopping_List_Items_Set_Input){
    const variables: UpdateShopingListItemMutationVariables = {
      id: id,
      changes:changes
    }

    return this.updateShopingListItemGQL.mutate(variables);

  }
}
