import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudBarComponent } from './crud-bar.component';
import { MatIcon, MatIconModule, MatButtonModule } from '@angular/material';
import { FlexModule } from '@angular/flex-layout';



@NgModule({
  declarations: [CrudBarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FlexModule
  ],
  exports: [CrudBarComponent]
})
export class CrudBarModule { }
