import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListDetailViewComponent } from './shopping-list-detail-view/shopping-list-detail-view.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ShoppingListDetailViewComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ShoppingListDetailViewComponent]
})
export class ShoppingListDetailViewModule { }
