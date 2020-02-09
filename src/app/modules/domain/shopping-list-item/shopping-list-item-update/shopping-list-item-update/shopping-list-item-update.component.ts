import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shopping_List_Items } from 'src/generated/graphql';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ShoppingListItemService } from 'src/app/shared/services/graphQL/shoppingListItem/shopping-list-item.service';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeBase } from 'src/app/shared/classes/unsubscribe-base';

@Component({
  selector: 'app-shopping-list-item-update',
  templateUrl: './shopping-list-item-update.component.html',
  styleUrls: ['./shopping-list-item-update.component.scss']
})
export class ShoppingListItemUpdateComponent extends UnsubscribeBase implements OnInit {
  @Input() item: Shopping_List_Items;

  itemForm: FormGroup;



  constructor(private fb: FormBuilder, private service: ShoppingListItemService) {
    super();
  }


  onSubmit(frm: FormGroup) {

    if (frm.valid) {
      this.service.updateShoppingListItem(this.item.id, { quantity: frm.value.quantity })
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(s => {
          //TODO this.saved.emit("Item successfully saved");
        });
    }
  }

  delete(frm: FormGroup) {
    this.service.deleteShoppingListItem(this.item.id)
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(s => {
        //TODO this.saved.emit("Item successfully deleted");
      });
  }


  onEditProductClick() {
    //this.editProductClicked.emit();
  }


  /**
   * lifecycle hooks
   */

  ngOnInit() {
    this.buildForm();

  }
  ngOnChanges() {
    if (this.item) {
      this.buildForm;
    }
  }


  /** 
   * Private methods
  */
  private buildForm(): any {
    this.itemForm = this.fb.group({
      quantity: [this.item.quantity, [Validators.required]]
    });
  }

}
