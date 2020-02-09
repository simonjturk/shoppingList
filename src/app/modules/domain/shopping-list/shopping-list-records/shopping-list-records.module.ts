import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListRecordsComponent } from './shopping-list-records/shopping-list-records.component';
import { ShoppingListRecordComponent } from './shopping-list-records/shopping-list-record/shopping-list-record.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ShoppingListRecordsComponent, ShoppingListRecordComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ShoppingListRecordsComponent]
})
export class ShoppingListRecordsModule { }
