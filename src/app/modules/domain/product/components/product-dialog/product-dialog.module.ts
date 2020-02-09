import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDialogComponent } from './product-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductCreateModule } from '../../product-create/product-create.module';



@NgModule({
  declarations: [ProductDialogComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductCreateModule
  ],
  exports: [ProductDialogComponent]
})
export class ProductDialogModule { }
