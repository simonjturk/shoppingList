import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListDetailComponent } from './shopping-list-detail/shopping-list-detail.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



import { ShoppingListItemCreateModule } from '../../domain/shopping-list-item/shopping-list-item-create/shopping-list-item-create.module';

import { ShoppingListRecordsModule } from '../../domain/shopping-list/shopping-list-records/shopping-list-records.module';
import { ShoppingListReadModule } from '../../domain/shopping-list/shopping-list-read/shopping-list-read.module';
import { ShoppingListCreateModule } from '../../domain/shopping-list/shopping-list-create/shopping-list-create.module';



@NgModule({
  declarations: [ShoppingListComponent, ShoppingListDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingListRoutingModule,
    ShoppingListCreateModule,
    //ShoppingListItemCreateModule,


    ShoppingListRecordsModule,
    ShoppingListReadModule
  ]
})
export class ShoppingListModule { }
