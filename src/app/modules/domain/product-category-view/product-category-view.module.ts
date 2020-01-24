import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryViewComponent } from './product-category-view/product-category-view.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ProductCategoryViewComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ProductCategoryViewComponent]
})
export class ProductCategoryViewModule { }
