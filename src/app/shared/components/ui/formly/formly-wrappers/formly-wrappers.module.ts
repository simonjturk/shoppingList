import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [FormlyExpansionPanelComponent],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports:[FormlyExpansionPanelComponent]
})
export class FormlyWrappersModule { }
