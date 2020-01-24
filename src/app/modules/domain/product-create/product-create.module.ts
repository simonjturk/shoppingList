import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCreateComponent } from './product-create/product-create.component';
import { SharedModule } from 'src/app/shared/shared.module';


import { CategoryPopupComponent } from '../../views/popups/modals/category-popup/category-popup.component';



@NgModule({
  declarations: [ProductCreateComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  entryComponents: [CategoryPopupComponent],
  exports: [ProductCreateComponent]
})
export class ProductCreateModule { }
