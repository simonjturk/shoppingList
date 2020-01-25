import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OaCardComponent } from './oa-card.component';



@NgModule({
  declarations: [OaCardComponent],
  imports: [
    CommonModule
  ],
  exports: [OaCardComponent]
})
export class OaCardModule { }
