import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { IButton } from 'selenium-webdriver';
import { Observable, Subscription } from 'rxjs';
import { IsLoadingService } from '@service-work/is-loading';


export interface ICrudButtons {
  button: CRUD_BUTTONS
  type: CRUD_BUTTONS_TYPES
  label: string
  icon: string
  color: string

}
export enum CRUD_BUTTONS {
  save,
  delete,
  cancel
}

export enum CRUD_BUTTONS_TYPES {
  basic,
  raised,
  stroked,
  flat,
  icon,
  fab,
  mini_fab
}

@Component({
  selector: 'oa-crud-bar',
  templateUrl: './crud-bar.component.html',
  styleUrls: ['./crud-bar.component.scss']
})
export class CrudBarComponent implements OnInit {

  @Input() buttons: ICrudButtons[] = [
    {
      button: CRUD_BUTTONS.save,
      type: CRUD_BUTTONS_TYPES.flat,
      label: "Save",
      icon: "save",
      color: "accent"
    },

    {
      button: CRUD_BUTTONS.cancel,
      type: CRUD_BUTTONS_TYPES.stroked,
      label: "Cancel",
      icon: "undo",
      color: "primary"
    },
    {
      button: CRUD_BUTTONS.delete,
      type: CRUD_BUTTONS_TYPES.stroked,
      label: "Delete",
      icon: "delete",
      color: "warn"
    }

  ]


  @Input() includeIcons = true;
  @Input() iconsOnly = false;
  @Input() buttonType = "flat";

  @Input() disabledSave = false;



  //@Output() saved = new EventEmitter();
  //@Output() cancelled = new EventEmitter();
  //@Output() deleted = new EventEmitter();

  @Output() action = new EventEmitter();

  //make our ENUM accessible to the compnent template
  CRUD_BUTTONS_TYPES = CRUD_BUTTONS_TYPES;


  constructor() { }

  ngOnInit() {
  }


  onClick(btn: ICrudButtons) {
    this.action.emit(btn.button);

    switch (btn.button) {
      case CRUD_BUTTONS.save:
        this.onSaved();
        break;

      case CRUD_BUTTONS.delete:
        this.onDeleted();
        break;

      case CRUD_BUTTONS.cancel:
        this.onCancelled();
        break;

      default:
        break;
    }
  }

  disabled(btn: ICrudButtons) {
    switch (btn.button) {
      case CRUD_BUTTONS.save:
        return this.disabledSave;
      default:
        return false;
    }
  }



  onSaved() {
    /*
      const sub = this.save
        .subscribe(response => {
          console.log('Data available.');
          this.action.emit(CRUD_BUTTONS.save);
          //this.saved.emit("saved"); //for backward compatibility
        },
          err => {
            console.error(err);
          });

      const result = this.isLoadingService.add(sub, { key: 'button' });
 */
  }
  onCancelled() {
    //this.cancelled.emit("cancelled");
  }
  onDeleted() {
    // this.deleted.emit("cancelled");
  }


  getIcon(btn: string) {
    switch (btn) {
      case 'save':
        this.onSaved();
        break;

      case 'delete':
        this.onDeleted();
        break;

      case 'cancel':
        this.onCancelled();
        break;

      default:
        break;
    }

  }
}
