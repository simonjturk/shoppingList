import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Shopping_List_Items, Shopping_List_Items_Set_Input } from 'src/generated/graphql';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ShoppingListItemService } from 'src/app/shared/services/graphQL/shoppingListItem/shopping-list-item.service';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeBase } from 'src/app/shared/classes/unsubscribe-base';
import { CRUD_BUTTONS } from 'src/app/shared/components/ui/crud-bar/crud-bar.component';
import { IsLoadingService } from '@service-work/is-loading';
import { MatAutocompleteTrigger } from '@angular/material';
import { OaAutocompleteComponent } from 'src/app/shared/components/ui/oa-form-controls/oa-autocomplete/oa-autocomplete.component';
import { IIdentifiable } from 'src/app/shared/components/ui/oa-form-controls/oa-autocomplete/IIdentifiable';

@Component({
  selector: 'app-shopping-list-item-update',
  templateUrl: './shopping-list-item-update.component.html',
  styleUrls: ['./shopping-list-item-update.component.scss']
})
export class ShoppingListItemUpdateComponent extends UnsubscribeBase implements OnInit {
  @Input() item: Shopping_List_Items;

  itemForm: FormGroup;



  constructor(private fb: FormBuilder, private service: ShoppingListItemService,
    private isLoadingService: IsLoadingService) {
    super();
  }

  action(type: CRUD_BUTTONS) {
    if (type === CRUD_BUTTONS.save) this.save();
    if (type === CRUD_BUTTONS.delete) this.delete();
  }


  save() {

    if (this.itemForm.valid) {

      const itemData: Shopping_List_Items_Set_Input = {
        quantity: this.itemForm.value.quantity,
        product_id: this.itemForm.value.product_id.id
      }

      this.isLoadingService.add(this.service.updateShoppingListItem(this.item.id, itemData), { key: 'button' });
      // .pipe(takeUntil(this.onDestroy$))
      //  .subscribe(s => {
      //TODO this.saved.emit("Item successfully saved");
      //  });
    }
  }


  delete() {
    this.isLoadingService.add(this.service.deleteShoppingListItem(this.item.id), { key: 'button' });
    //.pipe(takeUntil(this.onDestroy$))
    // .subscribe(s => {
    //TODO this.saved.emit("Item successfully deleted");
    // });
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
      // this.buildForm;

    }
  }


  /** 
   * Private methods
  */
  private buildForm(): any {
    const currentProduct: IIdentifiable = {
      id: this.item.product_id,
      label: this.item.product.name
    }

    //  this.itemForm.controls.product_id.setValue(currentProduct);


    this.itemForm = this.fb.group({
      quantity: [this.item.quantity, [Validators.required]],
      product_id: [currentProduct, [Validators.required]]
    });
  }

}
