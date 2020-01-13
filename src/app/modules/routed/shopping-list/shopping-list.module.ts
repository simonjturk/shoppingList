import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingListCreateModule } from '../../domain/shopping-list-create/shopping-list-create.module';


@NgModule({
  declarations: [ShoppingListComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingListRoutingModule,
    ShoppingListCreateModule
  ]
})
export class ShoppingListModule { }
