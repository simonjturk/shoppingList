import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListItemCreateComponent } from './shopping-list-item-create.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ShoppingListItemCreateComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ShoppingListItemCreateComponent]
})
export class ShoppingListItemCreateModule { }
