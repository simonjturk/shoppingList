import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemPopupComponent } from './bottom-sheets/item-popup/item-popup.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ItemViewModule } from '../../domain/item-view/item-view.module';
import { CreateProductPopupComponent } from './modals/create-product-popup/create-product-popup.component';
import { ProductCreateModule } from '../../domain/product-create/product-create.module';
import { CategoryPopupComponent } from './modals/category-popup/category-popup.component';
import { ProductCategoryViewModule } from '../../domain/product-category-view/product-category-view.module';



@NgModule({
  declarations: [ItemPopupComponent, CreateProductPopupComponent, CategoryPopupComponent],
  imports: [
    CommonModule,
    SharedModule,
    ItemViewModule,
    ProductCreateModule,
    ProductCategoryViewModule
  ],
  entryComponents: [],
  exports: [ItemPopupComponent, CreateProductPopupComponent, CategoryPopupComponent]
})
export class PopupsModule { }
