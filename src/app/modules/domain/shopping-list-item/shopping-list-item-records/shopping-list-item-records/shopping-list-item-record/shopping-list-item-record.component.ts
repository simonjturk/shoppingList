import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Shopping_List_Items } from 'src/generated/graphql';
import { Subject } from 'rxjs';
import { ShoppingListItemService } from 'src/app/shared/services/graphQL/shoppingListItem/shopping-list-item.service';
import { MatBottomSheet, MatCheckboxChange, MatDialog } from '@angular/material';
import { takeUntil } from 'rxjs/operators';

import { UnsubscribeBase } from 'src/app/shared/classes/unsubscribe-base';
import { ShoppingListItemDialogComponent } from '../../../components/shopping-list-item-dialog/shopping-list-item-dialog.component';

@Component({
  selector: 'shopping-list-item-record',
  templateUrl: './shopping-list-item-record.component.html',
  styleUrls: ['./shopping-list-item-record.component.scss']
})
export class ShoppingListItemRecordComponent extends UnsubscribeBase implements OnInit {
  @Input() item: Shopping_List_Items;



  checked: boolean = false;

  constructor(private shoppingListItemService: ShoppingListItemService, public dialog: MatDialog) {
    super()
  }

  checkChanged(event: MatCheckboxChange) {

    this.shoppingListItemService.updateShoppingListItem(this.item.id, { complete: event.checked })
      .pipe(takeUntil(this.onDestroy$))
      .subscribe();
  }

  onItemClick() {
    //open our popup
    //this.popup.open(ItemPopupComponent, { data: this.item, panelClass: 'bottom-sheet' });
    this.openDialog();
  }



  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    //update our shopping list item

    this.checked = this.item.complete;


  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ShoppingListItemDialogComponent, {
      width: '80%',
      data: this.item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}
