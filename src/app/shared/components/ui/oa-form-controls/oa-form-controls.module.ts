import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OaAutocompleteComponent } from './oa-autocomplete/oa-autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OaControlBaseComponent } from './oa-control-base.component';
import { AutoCompleteDataOptionsDirective } from './oa-autocomplete/data.directive';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [OaAutocompleteComponent, OaControlBaseComponent, AutoCompleteDataOptionsDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [OaAutocompleteComponent, AutoCompleteDataOptionsDirective]
})
export class OaFormControlsModule { }
