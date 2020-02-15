import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Shopping_List_Items } from 'src/generated/graphql';
import { Subject } from 'rxjs';
import { ShoppingListItemService } from 'src/app/shared/services/graphQL/shoppingListItem/shopping-list-item.service';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { takeUntil } from 'rxjs/operators';

import { UnsubscribeBase } from 'src/app/shared/classes/unsubscribe-base';

import { IOComponentData } from 'src/app/shared/components/ui/oa-dialog/oa-dialog/oa-dialog.component';

import { ShoppingListItemDialogService } from "src/app/shared/components/ui/oa-dialog/ShoppingListItemDialogService";

@Component({
  selector: 'shopping-list-item-record',
  templateUrl: './shopping-list-item-record.component.html',
  styleUrls: ['./shopping-list-item-record.component.scss']
})
export class ShoppingListItemRecordComponent extends UnsubscribeBase implements OnInit {
  @Input() item: Shopping_List_Items;



  checked: boolean = false;

  constructor(private shoppingListItemService: ShoppingListItemService, private dialogs: ShoppingListItemDialogService
  ) {
    super()
  }

  checkChanged(event: MatCheckboxChange) {

    this.shoppingListItemService.update({ id: this.item.id, complete: event.checked })
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

    const compData: IOComponentData[] = [
      {
        property: "item",
        value: this.item
      }
    ]
    this.dialogs.openUpdateDialog(compData);

  }

}
