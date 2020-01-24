import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListItemListComponent } from './shopping-list-item-list/shopping-list-item-list.component';
import { ItemComponent } from './shopping-list-item-list/item/item.component';
import { SharedModule } from 'src/app/shared/shared.module';


import { PopupsModule } from '../../views/popups/popups.module';
import { ItemPopupComponent } from '../../views/popups/bottom-sheets/item-popup/item-popup.component';



@NgModule({
  declarations: [ShoppingListItemListComponent, ItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    PopupsModule
  ],
  entryComponents: [ItemPopupComponent],
  exports: [ShoppingListItemListComponent]
})
export class ShoppingListItemListModule { }
