import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OaFormControlsModule } from '../oa-form-controls/oa-form-controls.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteProductDataDirective } from './product.directive';


@NgModule({
  declarations: [AutoCompleteProductDataDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OaFormControlsModule
  ],
  exports: [AutoCompleteProductDataDirective]
})
export class ProductAutocompleteModule { }
