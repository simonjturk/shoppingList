import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrudBarComponent } from './crud-bar.component';
import { MatIcon, MatIconModule, MatButtonModule } from '@angular/material';
import { FlexModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { IsLoadingModule } from '@service-work/is-loading';



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
