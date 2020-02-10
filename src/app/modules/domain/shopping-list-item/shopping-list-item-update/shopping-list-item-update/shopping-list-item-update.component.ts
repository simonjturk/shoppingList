import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Shopping_List_Items } from 'src/generated/graphql';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { ShoppingListItemService } from 'src/app/shared/services/graphQL/shoppingListItem/shopping-list-item.service';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeBase } from 'src/app/shared/classes/unsubscribe-base';
import { CRUD_BUTTONS } from 'src/app/shared/components/ui/crud-bar/crud-bar.component';
import { IsLoadingService } from '@service-work/is-loading';

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
      this.isLoadingService.add(this.service.updateShoppingListItem(this.item.id, { quantity: this.itemForm.value.quantity }), { key: 'button' });
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
