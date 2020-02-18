import { Component, OnInit, OnDestroy } from '@angular/core';
import { map } from 'rxjs/operators';
import { Shopping_List } from 'src/generated/graphql';
import { ShoppingListService } from 'src/app/shared/services/graphQL/shoppingList/shopping-list.service';
import { Subject } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { getHeapStatistics } from 'v8';
import { IsLoadingService } from '@service-work/is-loading';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  shoppingLists$;//:Observable<Shopping_List[]>;
  favShoppingLists$;//:Observable<Shopping_List[]>;
  sharedShoppingLists$;
  // Private
  private _unsubscribeAll: Subject<void> = new Subject<void>();


  constructor(private shoppingListService: ShoppingListService, public auth: AuthService, private isLoadingService: IsLoadingService) { }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------


  ngOnInit() {
    this.shoppingLists$ = this.isLoadingService.add(this.shoppingListService.readAll());

    this.favShoppingLists$ = this.shoppingListService.getFavouriteShoppingList();

    this.sharedShoppingLists$ = this.shoppingListService.getSharedShoppingLists()
      .pipe(map(res => res.map(sl => sl.shopping_list)));


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
