import { Injectable } from '@angular/core';
import { CreateShoppingListGQL, CreateShoppingListMutationVariables } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListCreateService {

  constructor(private gqlService: CreateShoppingListGQL) { }


  createShoppingList(name: string){
    const args: CreateShoppingListMutationVariables = {
      shoppingList:[
        {
          name: name
        }
      ]
    }
    return this.gqlService.mutate(args);
  }
  
}
