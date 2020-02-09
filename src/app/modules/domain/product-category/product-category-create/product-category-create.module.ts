import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryCreateComponent } from './product-category-create/product-category-create.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ProductCategoryCreateComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ProductCategoryCreateComponent]
})
export class ProductCategoryCreateModule { }
