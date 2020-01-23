import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { Shopping_List_Items } from 'src/generated/graphql';
import { ShoppingListItemService } from 'src/app/shared/services/graphQL/shoppingListItem/shopping-list-item.service';
import { MatCheckboxChange, MatBottomSheet } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ItemPopupComponent } from './item-popup/item-popup.component';

@Component({
  selector: 'shopping-list-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item: Shopping_List_Items;

  onDestroy$ = new Subject<void>();

  checked: boolean = false;

  constructor(private shoppingListItemService: ShoppingListItemService, private popup: MatBottomSheet) { }

  checkChanged(event: MatCheckboxChange) {

    this.shoppingListItemService.updateShoppingListItem(this.item.id, { complete: event.checked })
      .pipe(takeUntil(this.onDestroy$))
      .subscribe();
  }

  onItemClick() {
    //open our popup
    this.popup.open(ItemPopupComponent, { data: this.item, panelClass: 'bottom-sheet' });

  }



  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    //update our shopping list item

    this.checked = this.item.complete;


  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
