import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Shopping_List } from 'src/generated/graphql';
import { ShoppingListService } from 'src/app/shared/services/graphQL/shoppingList/shopping-list.service';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { getHeapStatistics } from 'v8';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingLists$;//:Observable<Shopping_List[]>;
  favShoppingLists$;//:Observable<Shopping_List[]>;

  // Private
  private _unsubscribeAll: Subject<void> = new Subject<void>();


  constructor(private shoppingListService: ShoppingListService, public auth: AuthService) { }

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

    this.shoppingLists$ = this.shoppingListService.getShoppingList();
    //.valueChanges
    //.pipe(map(l => l.data.shopping_list as Shopping_List[]))

    this.favShoppingLists$ = this.shoppingListService.getFavouriteShoppingList();
    //  .valueChanges
    // .pipe(map(l => l.data.shopping_list as Shopping_List[]))


    this.getToken();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
  poo
  getToken() {
    this.poo = this.auth.getTokenSilently$();
  }
}
