import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListItemCreateComponent } from './shopping-list-item-create.component';
import { SharedModule } from 'src/app/shared/shared.module';



import { ProductDialogComponent } from '../../product/components/product-dialog/product-dialog.component';
import { ProductDialogModule } from '../../product/components/product-dialog/product-dialog.module';

@NgModule({
  declarations: [ShoppingListItemCreateComponent],
  imports: [
    CommonModule,
    SharedModule,

    ProductDialogModule

  ],
  entryComponents: [ProductDialogComponent],
  exports: [ShoppingListItemCreateComponent]
})
export class ShoppingListItemCreateModule { }
