import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OaAutocompleteComponent } from './oa-autocomplete/oa-autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatIconModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { OaControlBaseComponent } from './oa-control-base.component';
import { AutoCompleteDataOptionsDirective } from './oa-autocomplete/data.directive';



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
