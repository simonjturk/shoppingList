import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyChipsComponent } from './material-chips.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormlyChipsComponent],
  providers: [],
  imports: [
    CommonModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    ReactiveFormsModule,
   
  
  ],
  exports:[FormlyChipsComponent]
})
export class OAMaterialChipsModule { }
