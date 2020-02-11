import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCreateComponent } from './product-create/product-create.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ProductCreateComponent],
  imports: [
    CommonModule,
    SharedModule

  ],
  //entryComponents: [],
  exports: [ProductCreateComponent]
})
export class ProductCreateModule { } 
