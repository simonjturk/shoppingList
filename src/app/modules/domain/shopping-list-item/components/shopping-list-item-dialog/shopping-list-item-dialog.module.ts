import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListItemDialogComponent } from './shopping-list-item-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingListItemUpdateModule } from '../../shopping-list-item-update/shopping-list-item-update.module';




@NgModule({
  declarations: [ShoppingListItemDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingListItemUpdateModule
  ],
  exports: [ShoppingListItemDialogComponent]
})
export class ShoppingListItemDialogModule { }
