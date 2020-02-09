import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListItemReadComponent } from './shopping-list-item-read/shopping-list-item-read.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ShoppingListItemReadComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ShoppingListItemReadComponent]
})
export class ShoppingListItemReadModule { }
