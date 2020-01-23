import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListViewComponent } from './shopping-list-view.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingListRecordComponent } from './shopping-list-record/shopping-list-record.component';



@NgModule({
  declarations: [ShoppingListViewComponent, ShoppingListRecordComponent],
  providers:[],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[ShoppingListViewComponent, ShoppingListRecordComponent]
})
export class ShoppingListViewModule { }
