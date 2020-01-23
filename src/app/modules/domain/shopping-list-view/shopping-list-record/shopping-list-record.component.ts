import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Shopping_List } from 'src/generated/graphql';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shared/services/graphQL/shoppingList/shopping-list.service';

@Component({
  selector: 'app-shopping-list-record',
  templateUrl: './shopping-list-record.component.html',
  styleUrls: ['./shopping-list-record.component.scss']
})
export class ShoppingListRecordComponent implements OnInit, OnDestroy {
  expanded:boolean;
  
  @Input() shoppingList: Shopping_List



  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * 
   * Constructor
   */
  constructor(private router: Router,private shoppingListService: ShoppingListService ) {

     // Set the private defaults
     this._unsubscribeAll = new Subject();
   }


  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit() {
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void
  {
      // Unsubscribe from all subscriptions
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------


  /**
   *
   *
   * @memberof ShoppingListRecordComponent
   */
  toggleFavourite(event){
    this.shoppingList.favourite = ! this.shoppingList.favourite 

    this.shoppingListService.toggleFavourite(this.shoppingList.id, this.shoppingList.favourite)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(x=>{
        //this.shoppingListService.getShoppingList().subscribe();
      });
  }

  goShoppingList(data){
    this.router.navigate(['shopping-list',data])
  }

}
