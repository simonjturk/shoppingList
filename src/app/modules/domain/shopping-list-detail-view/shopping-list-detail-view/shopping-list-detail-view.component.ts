import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';
import { GetShoppingListByIdGQL, Shopping_List, Shopping_List_Set_Input } from 'src/generated/graphql';
import { Subject } from 'rxjs';
import { takeUntil, flatMap, map } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { ShoppingListService } from 'src/app/shared/services/graphQL/shoppingList/shopping-list.service';


import { Interface } from 'readline';

@Component({
  selector: 'app-shopping-list-detail-view',
  templateUrl: './shopping-list-detail-view.component.html',
  styleUrls: ['./shopping-list-detail-view.component.scss']
})
export class ShoppingListDetailViewComponent implements OnInit, OnDestroy, OnChanges {

  // Private
  private _unsubscribeAll: Subject<any>;




  @Input() shoppingListId: string;
  shoppingList: Shopping_List;





  form = new FormGroup({});
  model: Shopping_List_Set_Input = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'List Name',
        placeholder: 'Name your shopping list',
        required: true,
      },
    },
    {
      key: 'favourite',
      type: 'toggle',
      templateOptions: {
        label: 'Favourite',
        required: true,
      },
    }
  ];


  constructor(
    private getShoppingListByIdGQL: GetShoppingListByIdGQL,
    private shoppingListService: ShoppingListService,
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();

  }



  submit() {
    if (this.form.valid) {



      this.shoppingListService.updateShoppingList(this.shoppingListId, this.model)
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(res => {
          if (res.errors && res.errors.length > 0) {
            //TODO error stuff
          }

        })
    }

  }

  saveTags() {
    //this.model.

  }


  private buildModel() {
    this.model = {
      name: this.shoppingList.name,
      favourite: this.shoppingList.favourite,
      ...this.model
    }

  }



  /**
   * lifecycle hooks
   */


  ngOnInit() {
  }

  ngOnChanges() {

    //get our changes
    if (this.shoppingListId) {
      this.getShoppingListByIdGQL.fetch({ id: this.shoppingListId })
        .pipe(takeUntil(this._unsubscribeAll))
        .subscribe(list => {
          //set our model with the shopping list data
          this.shoppingList = list.data.shopping_list[0] as Shopping_List;

          //update our form model
          this.buildModel();
        })

    }
  }


  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}


