import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemViewComponent } from './item-view/item-view.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ItemViewComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ItemViewComponent]
})
export class ItemViewModule { }
