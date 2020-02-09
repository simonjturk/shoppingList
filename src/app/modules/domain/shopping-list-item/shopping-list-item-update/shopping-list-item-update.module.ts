import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListItemUpdateComponent } from './shopping-list-item-update/shopping-list-item-update.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ShoppingListItemUpdateComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ShoppingListItemUpdateComponent]
})
export class ShoppingListItemUpdateModule { }
