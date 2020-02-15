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
  Shopping_List_Items,
  Shopping_List_Items_Insert_Input,
  UpdateShopingListItemMutation
} from 'src/generated/graphql';
import { map, tap } from 'rxjs/operators';
import gql from 'graphql-tag';
import { CacheHelperService, CACHE_ACTION } from 'src/app/core/graphql/helpers/cache-helper.service';
import { CrudStore } from 'src/app/core/store/crud/crud.store';
import { CRUD_MODE } from 'src/app/shared/enums/crud-mode';
import { IsLoadingService } from '@service-work/is-loading';
import { DataService } from '../../data/DataService';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListItemService extends DataService<Shopping_List_Items> {
  shit(poo: Shopping_List_Items_Insert_Input) {
    throw new Error("Method not implemented.");
  }

  constructor(
    private crudStore: CrudStore,
    private gqlService: CreateShoppingListItemGQL,
    private updateShopingListItemGQL: UpdateShopingListItemGQL,
    private getShopingListItemGQL: GetShoppingListItemsGQL,
    private deleteShoppingListItemGQL: DeleteShoppingListItemGQL,
  ) {
    super();
  }

  search(searchObject: GetShoppingListItemsQueryVariables): Observable<Shopping_List_Items[]> {

    return this.getShopingListItemGQL.watch(searchObject)
      .valueChanges
      .pipe(map(res => res.data.shopping_list_items as Shopping_List_Items[]));
  }

  create(createObject: Shopping_List_Items_Insert_Input): Observable<Shopping_List_Items[]> {
    const args: CreateShoppingListItemMutationVariables =
    {
      shoppingListItems: [createObject]
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
    }).pipe(map(res => res.data.insert_shopping_list_items.returning as Shopping_List_Items[]));
  }

  readSingle(id: string): Observable<Shopping_List_Items> {
    const vars: GetShoppingListItemsQueryVariables = {
      shoppingListId: id
    }

    return this.getShopingListItemGQL.watch(vars)
      .valueChanges
      .pipe(map(res => res.data.shopping_list_items[0] as Shopping_List_Items));
  }

  readAll(): Observable<Shopping_List_Items[]> {
    throw new Error("Method not implemented.");
  }

  delete(id: string): Observable<Shopping_List_Items[]> {
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

    }).pipe(map(res => res.data.delete_shopping_list_items.returning as Shopping_List_Items[]));
  }

  update(updateObject: Shopping_List_Items_Set_Input): Observable<Shopping_List_Items[]> {

    const mutationVars: UpdateShopingListItemMutationVariables = {
      id: updateObject.id,
      changes: updateObject

    }

    //update our crud store
    return this.updateShopingListItemGQL.mutate(mutationVars)
      //.pipe(map(res => res.data.update_shopping_list_items.returning as Shopping_List_Items[]))
      .pipe(tap(res => {
        this.crudStore.setShoppingListItem(res.data.update_shopping_list_items[0], CRUD_MODE.Create)
      }), map(res => res.data.update_shopping_list_items.returning as Shopping_List_Items[]))
  }


}
