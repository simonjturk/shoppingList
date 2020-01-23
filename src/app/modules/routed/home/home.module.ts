import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingListCreateModule } from '../../domain/shopping-list-create/shopping-list-create.module';
import { ShoppingListViewModule } from '../../domain/shopping-list-view/shopping-list-view.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    ShoppingListCreateModule,
    ShoppingListViewModule
  ]
})
export class HomeModule { }
