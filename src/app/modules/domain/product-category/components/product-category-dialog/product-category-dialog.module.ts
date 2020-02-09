import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCategoryDialogComponent } from './product-category-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCategoryCreateModule } from '../../product-category-create/product-category-create.module';



@NgModule({
  declarations: [ProductCategoryDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductCategoryCreateModule
  ],
  exports: [ProductCategoryDialogComponent]
})
export class ProductCategoryDialogModule { }
