import { Injectable } from '@angular/core';
import { CreateShoppingListGQL, GetSharedShoppingListsGQL, CreateShoppingListMutationVariables, GetShoppingListByIdGQL, GetShoppingListsDocument, GetShoppingListsGQL, UpdateShoppingListGQL, GetFavouriteShoppingListGQL, UpdateShoppingListMutationVariables, GetShoppingListsQuery, GetFavouriteShoppingListDocument, Shopping_List, Shopping_List_Set_Input, Shopping_List_Insert_Input, Shopping_List_Items_Insert_Input, DeleteShoppingListGQL, Shared_Lists, GetShoppingListsQueryVariables } from 'src/generated/graphql';
import { map, switchMap } from 'rxjs/operators';
import { CacheHelperService, CACHE_ACTION } from 'src/app/core/graphql/helpers/cache-helper.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DataService } from '../../data/DataService';
import { Observable } from 'rxjs';
import { ShoppingListItemService } from '../shoppingListItem/shopping-list-item.service';





/**
 *
 *
 * @export
 * @class ShoppingListService
 */
@Injectable({
  providedIn: 'root'
})


export class ShoppingListService extends DataService<Shopping_List> {

  private user_id: string;

  constructor(
    auth: AuthService,
    private gqlService: CreateShoppingListGQL,
    private getShoppingListsGQL: GetShoppingListsGQL,
    private updateShoppingListGQL: UpdateShoppingListGQL,
    private getFavouriteShoppingListGQL: GetFavouriteShoppingListGQL,
    private getShoppingListByIdGQL: GetShoppingListByIdGQL,
    private deleteShoppingListGQL: DeleteShoppingListGQL,
    private getSharedShoppingListsGQL: GetSharedShoppingListsGQL,
    private shoppingListItemService: ShoppingListItemService
  ) {

    super();
    //Set our user id for all calls.  Maybe could inject this automagically latersome sort of middleware?
    auth.getUser$().subscribe(u => this.user_id = u.sub);//the auth0 subscriber
  }


  create(shoppingList: Shopping_List_Insert_Input) {
    const args: CreateShoppingListMutationVariables = {
      shoppingList: [
        {
          ...shoppingList,
          user_id: this.user_id
        }]

    }
    //return this.gqlService.mutate(args);
    return this.gqlService.mutate(args, {
      update: (cache, { data }) => {


        const cacherHelper: CacheHelperService = new CacheHelperService(cache, data);

        cacherHelper.manageCache([
          {
            type: CACHE_ACTION.INSERT,
            queryDocument: GetShoppingListsDocument,
            variables: [{
              variableName: "userId",
              value: this.user_id

            }]
          }]);
      }
    }).pipe(map(res => res.data.insert_shopping_list.returning as Shopping_List[]));
  }

  delete(id: string) {

    //return this.gqlService.mutate(args);
    return this.deleteShoppingListGQL.mutate({ id: id }, {
      update: (cache, { data }) => {

        const cacherHelper: CacheHelperService = new CacheHelperService(cache, data);

        cacherHelper.manageCache([
          {
            type: CACHE_ACTION.DELETE,
            queryDocument: GetShoppingListsDocument,
            variables: [{
              variableName: "userId",
              value: this.user_id

            }]
          },
          {
            type: CACHE_ACTION.DELETE,
            queryDocument: GetFavouriteShoppingListDocument,
            variables: [
              {
                variableName: "favourite",
                value: true
              },
              {
                variableName: "userId",
                value: this.user_id
              }
            ]
          }]);
      }
    }).pipe(map(res => res.data.delete_shopping_list.returning as Shopping_List[]));
  }






  /**
   *
   *
   * @returns
   * @memberof ShoppingListService
   */
  readAll() {
    //throw new GraphQLError("Test GRaphQL Error");

    const vars: GetShoppingListsQueryVariables = {
      userId: this.user_id
    }

    return this.getShoppingListsGQL.watch(vars)
      .valueChanges
      .pipe(map(res => res.data.shopping_list as Shopping_List[]));

  }

  readSingle(id: string) {
    return this.getShoppingListByIdGQL.watch({ id: id })
      .valueChanges
      .pipe(map(res => res.data.shopping_list[0] as Shopping_List));

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
        const cacheHelper: CacheHelperService = new CacheHelperService(cache, data);

        cacheHelper.manageCache([
          {
            type: favourite ? CACHE_ACTION.INSERT : CACHE_ACTION.DELETE,
            queryDocument: GetFavouriteShoppingListDocument,
            variables: [{
              variableName: "userId",
              value: this.user_id
            }]
          }]);
      }

    });



  }

  update(shoppingListChanges: Shopping_List_Set_Input) {

    const changes: UpdateShoppingListMutationVariables = {
      changes: shoppingListChanges,
      id: shoppingListChanges.id,

    }
    return this.updateShoppingListGQL.mutate(changes)
      .pipe(map(res => res.data.update_shopping_list.returning as Shopping_List[]));



  }

  cloneShoppingList(shoppingList: Shopping_List) {

    //get the latest version of our shopping list
    //const latestShoppingList  = 
    return this.shoppingListItemService.search({ shoppingListId: shoppingList.id })
      .pipe(
        map(res => res),
        switchMap(items => {
          const sl: Shopping_List_Insert_Input = {
            name: `Copy of ${shoppingList.name}`,
            items: {

              data: items.map((x) => {
                return { product_id: x.product.id } as Shopping_List_Items_Insert_Input;
              })
            }
          }

          return this.create(sl).pipe(map(res => res.pop()));
        }));

    /*
    .subscribe(latestShoppingList =>{
      let items = latestShoppingList.items.map((x) => {
        return { product_id: x.product.id } as Shopping_List_Items_Insert_Input;
      });


    })


     const sl: Shopping_List_Insert_Input = {
    name: `Copy of ${shoppingList.name}`,
    items: {

      data: items
    }
  }
  
*/



    //return nserted shopping list
    //return this.create(sl).pipe(map(res => res.pop()));
  }


  search(searchObject: GetShoppingListsQuery): Observable<Shopping_List[]> {
    return null;

  }

  getFavouriteShoppingList() {
    const vars: GetShoppingListsQueryVariables = {
      userId: this.user_id
    }
    //throw new GraphQLError("Test GRaphQL Error");
    return this.getFavouriteShoppingListGQL.watch(vars)
      .valueChanges
      .pipe(map(res => res.data.shopping_list));
  }

  getSharedShoppingLists(): Observable<Shared_Lists[]> {

    return this.getSharedShoppingListsGQL.watch(null, { fetchPolicy: 'no-cache' })
      .valueChanges
      .pipe(map(res => res.data.shared_lists as Shared_Lists[]))

  }





}
