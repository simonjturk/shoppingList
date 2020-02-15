import { Injectable } from '@angular/core';
import { StoreBase } from 'src/app/core/store/store-base';
import { CRUD_MODE } from 'src/app/shared/enums';
import { CRUD_BUTTONS } from './crud-bar.component';
import { exists } from 'fs';


export interface IForms {
  id: string
  buttonClick: CRUD_BUTTONS
}


export class CrudBarFormEvent {
  buttonClick: CRUD_BUTTONS;
  constructor() {

  }
}





@Injectable({
  providedIn: 'root'
})
export class CrudBarService extends StoreBase<CrudBarFormEvent>{


  constructor() {
    super(new CrudBarFormEvent())
  }


  setButtonClick(btn: CRUD_BUTTONS) {

    /*
        const existingForms = this.state.forms;
        let thisForm = existingForms.findIndex(f => f.id === frm.id)
    
        if (thisForm === -1) {
          //not found so insert into state
          existingForms.push(frm);
        } else {
          existingForms[thisForm] = { ...existingForms[thisForm], buttonClick: frm.buttonClick }
        }
    */
    this.setState(
      { ...this.state, buttonClick: btn }
    )
  }

}

