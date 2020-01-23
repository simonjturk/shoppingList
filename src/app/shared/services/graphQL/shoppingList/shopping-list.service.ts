import { Injectable } from '@angular/core';
import { CreateShoppingListGQL, CreateShoppingListMutationVariables, GetShoppingListsDocument, GetShoppingListsGQL, UpdateShoppingListGQL, GetFavouriteShoppingListGQL, UpdateShoppingListMutationVariables, GetShoppingListsQuery, GetFavouriteShoppingListDocument, Shopping_List, Shopping_List_Set_Input } from 'src/generated/graphql';
import { map } from 'rxjs/operators';
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
    private gqlService: CreateShoppingListGQL ,
    private getShoppingListsGQL:GetShoppingListsGQL, 
    private updateShoppingListGQL:UpdateShoppingListGQL, 
    private getFavouriteShoppingListGQL:GetFavouriteShoppingListGQL) { }


  createShoppingList(name: string){
    const args: CreateShoppingListMutationVariables = {
      shoppingList:[
        {
          name: name
        }
      ]
    }
    //return this.gqlService.mutate(args);
    return this.gqlService.mutate(args,{
      update: (cache, {data}) => {

        // Read the data from our cache for this query.
        const existingShoppingLists:any = cache.readQuery({ query: GetShoppingListsDocument });

        //get our latest shopping list just inserted
        const newShoppingList = data.insert_shopping_list.returning[0];
        
        // Add our shopping list from the mutation to the end.
        cache.writeQuery({
          query:GetShoppingListsDocument,
          data: {shopping_list:[newShoppingList, ...existingShoppingLists.shopping_list]} 
        })
      }
    });
  }

  getShoppingList(){
    return this.getShoppingListsGQL.watch()
    .valueChanges
    .pipe(map(res=> res.data.shopping_list));
  }

  getFavouriteShoppingList(){
      return this.getFavouriteShoppingListGQL.watch()
      .valueChanges
      .pipe(map(res=> res.data.shopping_list));
  }

  toggleFavourite(id:string, favourite: boolean){

    const changes: Shopping_List_Set_Input = {
      favourite: favourite
    }

    return this.updateShoppingList(id, changes)


    
  }

  updateShoppingList(id:string, shoppingListChanges: Shopping_List_Set_Input){

    const changes: UpdateShoppingListMutationVariables = {
        changes:shoppingListChanges,
        id: id,

    }
    //return this.updateShoppingListGQL.mutate(changes)

    return this.updateShoppingListGQL.mutate(changes,{
        update: (cache, {data}) => {
            //we are going to get all the fav lists and update our favs cache
          
          const existingShoppingLists:GetShoppingListsQuery = cache.readQuery({ query: GetShoppingListsDocument });
  
          const newList = [...existingShoppingLists.shopping_list.filter(x=>{
              return x.favourite ===true;
          })]
            
         
         
          cache.writeQuery({
            query:GetFavouriteShoppingListDocument,
            data: {shopping_list:[ ...newList]} 
          })
        }
      });


    
  }

  //PRivate methods

  
  


}
