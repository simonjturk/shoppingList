import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListItemCreateComponent } from './shopping-list-item-create.component';
import { SharedModule } from 'src/app/shared/shared.module';

import { ProductCreateModule } from '../product-create/product-create.module';
import { PopupsModule } from '../../views/popups/popups.module';
import { CreateProductPopupComponent } from '../../views/popups/modals/create-product-popup/create-product-popup.component';



@NgModule({
  declarations: [ShoppingListItemCreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    PopupsModule
  ],
  entryComponents: [CreateProductPopupComponent],
  exports: [ShoppingListItemCreateComponent]
})
export class ShoppingListItemCreateModule { }
