import { Component, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-button',
  templateUrl: './formly-button.component.html',
  styleUrls: ['./formly-button.component.scss']
})
export class FormlyButtonComponent  extends FieldType  implements OnInit {

  constructor() {
    super()
   }

  ngOnInit() {
  }
  onClick($event) {
    if (this.to.onClick) {
      this.to.onClick($event);
    }
  }
}
