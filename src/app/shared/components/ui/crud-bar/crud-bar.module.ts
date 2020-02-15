import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudBarComponent } from './crud-bar.component';

import { FlexModule } from '@angular/flex-layout';

import { IsLoadingModule } from '@service-work/is-loading';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [CrudBarComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    FlexModule,
    IsLoadingModule
  ],
  exports: [CrudBarComponent]
})
export class CrudBarModule { }
