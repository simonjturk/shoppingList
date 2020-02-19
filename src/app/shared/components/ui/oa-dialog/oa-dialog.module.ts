import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OaDialogComponent } from './oa-dialog/oa-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ShoppingListItemUpdateComponent } from 'src/app/modules/domain/shopping-list-item/shopping-list-item-update/shopping-list-item-update/shopping-list-item-update.component';
import { ShoppingListUpdateModule } from 'src/app/modules/domain/shopping-list/shopping-list-update/shopping-list-update.module';

import { ProductCreateModule } from 'src/app/modules/domain/product/product-create/product-create.module';
import { ProductCreateComponent } from 'src/app/modules/domain/product/product-create/product-create/product-create.component';
import { ProductCategoryCreateModule } from 'src/app/modules/domain/product-category/product-category-create/product-category-create.module';
import { ProductCategoryCreateComponent } from 'src/app/modules/domain/product-category/product-category-create/product-category-create/product-category-create.component';
import { ShoppingListItemDialogService } from "./ShoppingListItemDialogService";
import { ProductDialogService } from "./ProductDialogService";
import { ProductCategoryDialogService } from "./ProductCategoryDialogService";
import { ShoppingListItemUpdateModule } from 'src/app/modules/domain/shopping-list-item/shopping-list-item-update/shopping-list-item-update.module';
import { CrudBarModule } from '../crud-bar/crud-bar.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ShoppingListUpdateComponent } from 'src/app/modules/domain/shopping-list/shopping-list-update/shopping-list-update/shopping-list-update.component';



@NgModule({
  declarations: [OaDialogComponent],
  //providers: [ShoppingListItemDialogService, ProductCategoryDialogService, ProductDialogService],
  imports: [
    CommonModule,
    SharedModule,
    ShoppingListUpdateModule,
    ProductCreateModule,
    ProductCategoryCreateModule,
    ShoppingListItemUpdateModule,
    ShoppingListUpdateModule,
    CrudBarModule
  ],
  exports: [OaDialogComponent],
  entryComponents: [ShoppingListItemUpdateComponent, ShoppingListUpdateComponent, ProductCreateComponent, ProductCategoryCreateComponent, OaDialogComponent]
})
export class OaDialogModule { }
