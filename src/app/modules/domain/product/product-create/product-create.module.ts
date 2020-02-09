import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCreateComponent } from './product-create/product-create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCategoryDialogModule } from '../../product-category/components/product-category-dialog/product-category-dialog.module';
import { ProductCategoryDialogComponent } from '../../product-category/components/product-category-dialog/product-category-dialog.component';



@NgModule({
  declarations: [ProductCreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductCategoryDialogModule
  ],
  entryComponents: [ProductCategoryDialogComponent],
  exports: [ProductCreateComponent]
})
export class ProductCreateModule { } 
