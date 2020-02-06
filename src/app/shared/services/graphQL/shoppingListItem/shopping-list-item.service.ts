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
  GetShoppingListItemsQueryVariables,
  DeleteShoppingListItemGQL,
  DeleteShoppingListItemMutationVariables,
  Shopping_List_Items
} from 'src/generated/graphql';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { CacheHelperService, CACHE_ACTION } from 'src/app/core/graphql/helpers/cache-helper.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListItemService {

  constructor(
    private gqlService: CreateShoppingListItemGQL,
    private productsService: GetProductsGQL,
    private updateShopingListItemGQL: UpdateShopingListItemGQL,
    private getShopingListItemGQL: GetShoppingListItemsGQL,
    private deleteShoppingListItemGQL: DeleteShoppingListItemGQL) { }

  getShoppingListItems(shoppingListId: string) {

    const vars: GetShoppingListItemsQueryVariables = {
      shoppingListId: shoppingListId
    }

    return this.getShopingListItemGQL.watch(vars)
      .valueChanges
      .pipe(map(res => res.data.shopping_list_items));
  }



  createShoppingListItem(shoppingListId: string, productId: string, quantity: number) {
    const args: CreateShoppingListItemMutationVariables =
    {
      shoppingListItems: [{
        shopping_list_id: shoppingListId,
        product_id: productId,
        quantity: quantity
      }]
    }


    return this.gqlService.mutate(args, {
      update: (cache, { data }) => {

        const cacheHelper: CacheHelperService = new CacheHelperService(cache, data);

        cacheHelper.manageCache([
          {
            type: CACHE_ACTION.INSERT,
            queryDocument: GetShoppingListItemsDocument,
            variables: [{
              variableName: "shoppingListId",
              field: "shopping_list_id"
            }]
          }]);

      }
    });
  }

  deleteShoppingListItem(id: string) {
    const vars: DeleteShoppingListItemMutationVariables = {
      id: id
    }

    return this.deleteShoppingListItemGQL.mutate(vars, {
      update: (cache, { data }) => {


        const cacherHelper: CacheHelperService = new CacheHelperService(cache, data);

        cacherHelper.manageCache([
          {
            type: CACHE_ACTION.DELETE,
            queryDocument: GetShoppingListItemsDocument,
            variables: [{
              variableName: "shoppingListId",
              field: "shopping_list_id"
            }]
          }]);

      }

    });
  }



  getProducts() {

    return this.productsService.watch()
      .valueChanges
      .pipe(map(res => res.data.products));
  }

  updateShoppingListItem(id: string, changes: Shopping_List_Items_Set_Input) {
    const variables: UpdateShopingListItemMutationVariables = {
      id: id,
      changes: changes
    }

    return this.updateShopingListItemGQL.mutate(variables);

  }
}
