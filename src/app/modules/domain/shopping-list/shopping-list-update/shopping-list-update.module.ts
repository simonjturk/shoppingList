import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListUpdateComponent } from './shopping-list-update/shopping-list-update.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ShoppingListUpdateComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ShoppingListUpdateComponent]
})
export class ShoppingListUpdateModule { }
