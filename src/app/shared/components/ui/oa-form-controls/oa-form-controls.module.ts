import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OaAutocompleteComponent } from './oa-autocomplete/oa-autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatIconModule, MatInputModule } from '@angular/material';
import { OaControlBaseComponent } from './oa-control-base.component';



@NgModule({
  declarations: [OaAutocompleteComponent, OaControlBaseComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatInputModule
  ],
  exports: [OaAutocompleteComponent]
})
export class OaFormControlsModule { }
