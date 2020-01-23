import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListItemListComponent } from './shopping-list-item-list/shopping-list-item-list.component';
import { ItemComponent } from './shopping-list-item-list/item/item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemViewModule } from '../item-view/item-view.module';
import { ItemPopupComponent } from './shopping-list-item-list/item/item-popup/item-popup.component';



@NgModule({
  declarations: [ShoppingListItemListComponent, ItemComponent, ItemPopupComponent],
  imports: [
    CommonModule,
    SharedModule,
    ItemViewModule
  ],
  entryComponents: [ItemPopupComponent],
  exports: [ShoppingListItemListComponent]
})
export class ShoppingListItemListModule { }
