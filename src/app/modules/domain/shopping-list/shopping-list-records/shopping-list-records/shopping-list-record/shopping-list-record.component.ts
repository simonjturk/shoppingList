import { Component, OnInit, Input } from '@angular/core';
import { Shopping_List } from 'src/generated/graphql';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shared/services/graphQL/shoppingList/shopping-list.service';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeBase } from 'src/app/shared/classes/unsubscribe-base';

@Component({
  selector: 'shopping-list-record',
  templateUrl: './shopping-list-record.component.html',
  styleUrls: ['./shopping-list-record.component.scss']
})
export class ShoppingListRecordComponent extends UnsubscribeBase implements OnInit {
  expanded: boolean;

  @Input() shoppingList: Shopping_List


  /**
   * 
   * Constructor
   */
  constructor(private router: Router, private shoppingListService: ShoppingListService) {
    super();
  }


  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
  }


  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------


  /**
   *
   *
   * @memberof ShoppingListRecordComponent
   */
  toggleFavourite(event) {
    this.shoppingList.favourite = !this.shoppingList.favourite

    this.shoppingListService.toggleFavourite(this.shoppingList.id, this.shoppingList.favourite)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(x => {
        //this.shoppingListService.getShoppingList().subscribe();
      });
  }

  goShoppingList(data) {
    this.router.navigate(['shopping-list', data])
  }

  deleteShoppingList() {
    this.shoppingListService.deleteShoppingList(this.shoppingList.id).pipe(takeUntil(this.onDestroy$))
      .subscribe(sl => {

      })
  }

  cloneShoppingList() {
    this.shoppingListService.cloneShoppingList(this.shoppingList)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(sl => {
        //TODO should check for errors etc
        this.router.navigate(['shopping-list', sl.data.insert_shopping_list.returning[0].id])
      })
  }

}
