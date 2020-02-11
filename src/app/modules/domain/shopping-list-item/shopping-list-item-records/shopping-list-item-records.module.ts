import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListItemRecordsComponent } from './shopping-list-item-records/shopping-list-item-records.component';
import { ShoppingListItemRecordComponent } from './shopping-list-item-records/shopping-list-item-record/shopping-list-item-record.component';
import { SharedModule } from 'src/app/shared/shared.module';


import { OaDialogComponent } from 'src/app/shared/components/ui/oa-dialog/oa-dialog/oa-dialog.component';
import { ShoppingListItemUpdateComponent } from '../shopping-list-item-update/shopping-list-item-update/shopping-list-item-update.component';
import { OaDialogModule } from 'src/app/shared/components/ui/oa-dialog/oa-dialog.module';



@NgModule({
  declarations: [ShoppingListItemRecordsComponent, ShoppingListItemRecordComponent],
  imports: [
    CommonModule,
    SharedModule, OaDialogModule

  ],
  //entryComponents: [OaDialogComponent, ShoppingListItemUpdateComponent],
  exports: [ShoppingListItemRecordsComponent]
})
export class ShoppingListItemRecordsModule { }
