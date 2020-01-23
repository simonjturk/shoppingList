import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-expansion-panel-wrapper',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.scss']
})
export class FormlyExpansionPanelComponent extends FieldWrapper {
  @ViewChild('fieldComponent', {static: false}) fieldComponent: ViewContainerRef;

 

}
