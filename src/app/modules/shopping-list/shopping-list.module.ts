import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { ShoppingListComponent } from './shopping-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './views/home/home.component';


@NgModule({
  declarations: [ShoppingListComponent, HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingListRoutingModule
  ]
})
export class ShoppingListModule { }
