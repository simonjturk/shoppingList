import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListReadComponent } from './shopping-list-read/shopping-list-read.component';
import { SharedModule } from 'src/app/shared/shared.module';


import { ShoppingListItemRecordsModule } from '../../shopping-list-item/shopping-list-item-records/shopping-list-item-records.module';
import { ShoppingListItemCreateModule } from '../../shopping-list-item/shopping-list-item-create/shopping-list-item-create.module';



@NgModule({
  declarations: [ShoppingListReadComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingListItemCreateModule,
    ShoppingListItemRecordsModule
  ],
  exports: [ShoppingListReadComponent]
})
export class ShoppingListReadModule { }
