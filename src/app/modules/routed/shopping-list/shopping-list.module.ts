import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingListDetailComponent } from './shopping-list-detail/shopping-list-detail.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingListViewModule } from '../../domain/shopping-list-view/shopping-list-view.module';
import { ShoppingListCreateModule } from '../../domain/shopping-list-create/shopping-list-create.module';
import { ShoppingListDetailViewModule } from '../../domain/shopping-list-detail-view/shopping-list-detail-view.module';
import { ShoppingListItemCreateModule } from '../../domain/shopping-list-item-create/shopping-list-item-create.module';
import { ShoppingListItemListModule } from '../../domain/shopping-list-item-list/shopping-list-item-list.module';



@NgModule({
  declarations: [ShoppingListComponent, ShoppingListDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingListRoutingModule,
    ShoppingListViewModule,
    ShoppingListCreateModule,
    ShoppingListDetailViewModule,
    ShoppingListItemCreateModule,
    ShoppingListItemListModule
  ]
})
export class ShoppingListModule { }
