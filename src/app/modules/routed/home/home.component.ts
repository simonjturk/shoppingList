import { Component, OnInit, OnDestroy } from '@angular/core';
import { GetShoppingListsGQL, Shopping_List, GetFavouriteShoppingListGQL } from 'src/generated/graphql';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
 
shoppingLists:Shopping_List[];
shoppingLists$;//:Observable<Shopping_List[]>;
favShoppingLists$;//:Observable<Shopping_List[]>;


// Private
private _unsubscribeAll: Subject<any>;

/**
 *Creates an instance of HomeComponent.
 * @param {GetShoppingListsGQL} shoppingListService
 * @memberof HomeComponent
 */
constructor(private shoppingListService: GetShoppingListsGQL, private getFavouriteShoppingListGQL:GetFavouriteShoppingListGQL) { 
   // Set the private defaults
   this._unsubscribeAll = new Subject();
}


// -----------------------------------------------------------------------------------------------------
// @ Lifecycle hooks
// -----------------------------------------------------------------------------------------------------


  ngOnInit() {
/*
    this.shoppingListService.watch()
    .valueChanges
    .pipe(takeUntil(this._unsubscribeAll))
    .subscribe(lists=>{
      this.shoppingLists = lists.data.shopping_list as Shopping_List[];
    });
    */

    this.shoppingLists$ = this.shoppingListService.watch()
    .valueChanges
    .pipe(map(l=> l.data.shopping_list as Shopping_List[]))

    this.favShoppingLists$ = this.getFavouriteShoppingListGQL.watch()
    .valueChanges
    .pipe(map(l=> l.data.shopping_list as Shopping_List[]))
    
    


  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
