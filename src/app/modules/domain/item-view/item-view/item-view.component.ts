import { Component, OnInit, Input, OnChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Shopping_List_Items } from 'src/generated/graphql';
import { ShoppingListItemService } from 'src/app/shared/services/graphQL/shoppingListItem/shopping-list-item.service';
import { from } from 'zen-observable';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})


export class ItemViewComponent implements OnInit, OnChanges, OnDestroy {
  @Input() item: Shopping_List_Items;

  @Output() saved = new EventEmitter();
  @Output() deleted = new EventEmitter();


  itemForm: FormGroup;



  /**
   * 
   * Private members
   */
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private fb: FormBuilder, private service: ShoppingListItemService) { }


  onSubmit(frm: FormGroup) {

    if (frm.valid) {
      this.service.updateShoppingListItem(this.item.id, { quantity: frm.value.quantity })
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(s => {
          this.saved.emit("Item successfully saved");
        });
    }
  }

  delete() {
    this.deleted.emit("Item successfully deleted")
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

  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this.onDestroy$.next();
    this.onDestroy$.complete();
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
