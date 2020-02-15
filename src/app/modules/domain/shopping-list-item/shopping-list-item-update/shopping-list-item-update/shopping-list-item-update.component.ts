import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Shopping_List_Items, Shopping_List_Items_Set_Input, Shopping_List_Set_Input } from 'src/generated/graphql';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ShoppingListItemService } from 'src/app/shared/services/graphQL/shoppingListItem/shopping-list-item.service';

import { IsLoadingService } from '@service-work/is-loading';
import { IIdentifiable } from 'src/app/shared/components/ui/oa-form-controls/oa-autocomplete/IIdentifiable';
import { CrudBarService } from 'src/app/shared/components/ui/crud-bar/crud-bar.service';
import { CrudBaseComponent } from 'src/app/shared/classes/crud-base.component';

import { CRUD_MODE } from 'src/app/shared/enums';

@Component({
  selector: 'app-shopping-list-item-update',
  templateUrl: './shopping-list-item-update.component.html',
  styleUrls: ['./shopping-list-item-update.component.scss']
})
export class ShoppingListItemUpdateComponent extends CrudBaseComponent<Shopping_List_Items> implements OnInit {

  @Input() item: Shopping_List_Items;

  itemForm: FormGroup;



  constructor(
    private fb: FormBuilder,
    service: ShoppingListItemService,
    crudBarService: CrudBarService,
    isLoadingService: IsLoadingService) {


    super(CRUD_MODE.Update, isLoadingService, crudBarService, service);

  }

  onEditProductClick() {
    //this.editProductClicked.emit();
  }


  /**
   * lifecycle hooks
   */

  ngOnInit() {
    this.buildForm();
    super.ngOnInit();

  }
  ngOnChanges() {
    super.ngOnChanges();
  }

  /**
   * Over rides
   */


  public buildDataObject() {

    const itemData: Shopping_List_Items_Set_Input = {
      id: this.item.id,
      quantity: this.itemForm.value.quantity,
      product_id: this.itemForm.value.product_id.id
    }

    return itemData;
  }


  /** 
   * Private methods
  */
  private buildForm(): any {
    const currentProduct: IIdentifiable = {
      id: this.item.product_id,
      label: this.item.product.name
    }
    this.itemForm = this.fb.group({
      quantity: [this.item.quantity, [Validators.required]],
      product_id: [currentProduct, [Validators.required]]
    });
  }

}
