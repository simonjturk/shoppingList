import { Injectable } from '@angular/core';
import { CreateShoppingListGQL, CreateShoppingListMutationVariables, GetShoppingListByIdGQL, GetShoppingListsDocument, GetShoppingListsGQL, UpdateShoppingListGQL, GetFavouriteShoppingListGQL, UpdateShoppingListMutationVariables, GetShoppingListsQuery, GetFavouriteShoppingListDocument, Shopping_List, Shopping_List_Set_Input, Shopping_List_Insert_Input, Shopping_List_Items_Insert_Input, DeleteShoppingListGQL } from 'src/generated/graphql';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { GraphQLError } from 'graphql';
import { DataProxy } from 'apollo-cache';
import { headersToString } from 'selenium-webdriver/http';
import { CacheHelperService, CACHE_ACTION } from 'src/app/core/graphql/helpers/cache-helper.service';





/**
 *
 *
 * @export
 * @class ShoppingListService
 */
@Injectable({
  providedIn: 'root'
})


export class ShoppingListService {

  constructor(
    private gqlService: CreateShoppingListGQL,
    private getShoppingListsGQL: GetShoppingListsGQL,
    private updateShoppingListGQL: UpdateShoppingListGQL,
    private getFavouriteShoppingListGQL: GetFavouriteShoppingListGQL,
    private getShoppingListByIdGQL: GetShoppingListByIdGQL,
    private deleteShoppingListGQL: DeleteShoppingListGQL) {



  }


  createShoppingList(shoppingList: Shopping_List_Insert_Input) {
    const args: CreateShoppingListMutationVariables = {
      shoppingList: [shoppingList]

    }
    //return this.gqlService.mutate(args);
    return this.gqlService.mutate(args, {
      update: (cache, { data }) => {


        const cacherHelper: CacheHelperService = new CacheHelperService(cache, data);

        cacherHelper.manageCache([
          {
            type: CACHE_ACTION.INSERT,
            queryDocument: GetShoppingListsDocument,
            variables: null
          }]);
      }
    });
  }

  deleteShoppingList(id: string) {

    //return this.gqlService.mutate(args);
    return this.deleteShoppingListGQL.mutate({ id: id }, {
      update: (cache, { data }) => {

        const cacherHelper: CacheHelperService = new CacheHelperService(cache, data);

        cacherHelper.manageCache([
          {
            type: CACHE_ACTION.DELETE,
            queryDocument: GetShoppingListsDocument,
            variables: null
          },
          {
            type: CACHE_ACTION.DELETE,
            queryDocument: GetFavouriteShoppingListDocument,
            variables: { favourite: true }
          }]);
      }
    });
  }






  /**
   *
   *
   * @returns
   * @memberof ShoppingListService
   */
  getShoppingList() {
    //throw new GraphQLError("Test GRaphQL Error");


    return this.getShoppingListsGQL.watch()
      .valueChanges
      .pipe(map(res => res.data.shopping_list));

  }

  getShoppingListById(id: string) {
    return this.getShoppingListByIdGQL.watch({ id: id })
      .valueChanges
      .pipe(map(res => res.data.shopping_list[0] as Shopping_List));

  }


  getFavouriteShoppingList() {
    //throw new GraphQLError("Test GRaphQL Error");
    return this.getFavouriteShoppingListGQL.watch()
      .valueChanges
      .pipe(map(res => res.data.shopping_list));
  }

  toggleFavourite(id: string, favourite: boolean) {


    const changes: UpdateShoppingListMutationVariables = {
      changes: {
        favourite: favourite
      },
      id: id,

    }
    return this.updateShoppingListGQL.mutate(changes, {
      update: (cache, { data }) => {
        //we need to make sure our favourites cache is updated
        const cacherHelper: CacheHelperService = new CacheHelperService(cache, data);

        cacherHelper.manageCache([
          {
            type: favourite ? CACHE_ACTION.INSERT : CACHE_ACTION.DELETE,
            queryDocument: GetFavouriteShoppingListDocument,
            variables: null
          }]);
      }

    });



  }

  updateShoppingList(id: string, shoppingListChanges: Shopping_List_Set_Input) {

    const changes: UpdateShoppingListMutationVariables = {
      changes: shoppingListChanges,
      id: id,

    }
    return this.updateShoppingListGQL.mutate(changes);



  }

  cloneShoppingList(shoppingList: Shopping_List) {

    let items = shoppingList.items.map((x) => {
      return { product_id: x.product.id } as Shopping_List_Items_Insert_Input;
    });



    const sl: Shopping_List_Insert_Input = {
      name: `Copy of ${shoppingList.name}`,
      items: {

        data: items
      }
    }

    return this.createShoppingList(sl)
  }



  //PRivate methods





}
