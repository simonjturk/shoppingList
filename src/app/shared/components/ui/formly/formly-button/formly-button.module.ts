import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyButtonComponent } from './formly-button.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [FormlyButtonComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule
  ],
  exports:[FormlyButtonComponent]
})
export class FormlyButtonModule { }
