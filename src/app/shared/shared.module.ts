import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
import { ArrayFilterPipe } from './pipes/array.pipe';
import { ArrayHelpersService } from './utilities/array-helpers.service';
import { ShoppingListService } from './services/graphQL/shoppingList/shopping-list.service';
import { ShoppingListItemService } from './services/graphQL/shoppingListItem/shopping-list-item.service';


import { CrudBarModule } from './components/ui/crud-bar/crud-bar.module';
import { OaCardModule } from './components/ui/oa-card/oa-card.module';
import { OaFormControlsModule } from './components/ui/oa-form-controls/oa-form-controls.module';
import { IsLoadingModule } from '@service-work/is-loading';
import { ProductAutocompleteModule } from './components/ui/product-autocomplete/product-autocomplete.module';


@NgModule({
  declarations: [ArrayFilterPipe],
  providers: [
    //ArrayHelpersService,
    //ShoppingListService,
    //ShoppingListItemService
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    IsLoadingModule,


    FlexModule,


  ],
  exports: [MaterialModule, ReactiveFormsModule,

    FlexModule,
    ArrayFilterPipe,

    FormsModule,
    ReactiveFormsModule,
    CrudBarModule,
    OaCardModule,
    OaFormControlsModule,
    ProductAutocompleteModule,
    IsLoadingModule
  ]

})
export class SharedModule { }
