import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListItemRecordsComponent } from './shopping-list-item-records/shopping-list-item-records.component';
import { ShoppingListItemRecordComponent } from './shopping-list-item-records/shopping-list-item-record/shopping-list-item-record.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { ShoppingListItemDialogComponent } from '../components/shopping-list-item-dialog/shopping-list-item-dialog.component';
import { ShoppingListItemDialogModule } from '../components/shopping-list-item-dialog/shopping-list-item-dialog.module';



@NgModule({
  declarations: [ShoppingListItemRecordsComponent, ShoppingListItemRecordComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingListItemDialogModule
  ],
  entryComponents: [ShoppingListItemDialogComponent],
  exports: [ShoppingListItemRecordsComponent]
})
export class ShoppingListItemRecordsModule { }
