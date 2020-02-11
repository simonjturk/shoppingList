import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListItemCreateComponent } from './shopping-list-item-create.component';
import { SharedModule } from 'src/app/shared/shared.module';



//import { ProductDialogComponent } from '../../product/components/product-dialog/product-dialog.component';
//import { ProductDialogModule } from '../../product/components/product-dialog/product-dialog.module';
import { OaDialogModule } from 'src/app/shared/components/ui/oa-dialog/oa-dialog.module';
import { OaDialogComponent } from 'src/app/shared/components/ui/oa-dialog/oa-dialog/oa-dialog.component';

@NgModule({
  declarations: [ShoppingListItemCreateComponent],
  imports: [
    CommonModule,
    SharedModule,

    //ProductDialogModule,
    OaDialogModule

  ],
  // entryComponents: [OaDialogComponent],
  exports: [ShoppingListItemCreateComponent]
})
export class ShoppingListItemCreateModule { }
