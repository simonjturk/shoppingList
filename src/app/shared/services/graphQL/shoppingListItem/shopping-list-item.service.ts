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
import { map, tap } from 'rxjs/operators';
import gql from 'graphql-tag';
import { CacheHelperService, CACHE_ACTION } from 'src/app/core/graphql/helpers/cache-helper.service';
import { CrudStore } from 'src/app/core/store/crud/crud.store';
import { CRUD_MODE } from 'src/app/shared/enums/crud-mode';
import { IsLoadingService } from '@service-work/is-loading';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListItemService {

  constructor(
    private crudStore: CrudStore,
    private gqlService: CreateShoppingListItemGQL,
    private productsService: GetProductsGQL,
    private updateShopingListItemGQL: UpdateShopingListItemGQL,
    private getShopingListItemGQL: GetShoppingListItemsGQL,
    private deleteShoppingListItemGQL: DeleteShoppingListItemGQL,
    private isLoadingService: IsLoadingService) { }

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


        //update our crud store
        this.crudStore.setShoppingListItem(data.insert_shopping_list_items.returning[0] as Shopping_List_Items, CRUD_MODE.Create);
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

        //update our crud store
        this.crudStore.setShoppingListItem(data.delete_shopping_list_items.returning[0] as Shopping_List_Items, CRUD_MODE.Delete)
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
    //update our crud store
    return this.updateShopingListItemGQL.mutate(variables)
      .pipe(tap(res => {
        this.crudStore.setShoppingListItem(res.data.update_shopping_list_items[0], CRUD_MODE.Create)
      }))

  }
}
