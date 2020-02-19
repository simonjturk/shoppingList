import { Component, OnInit, Input } from '@angular/core';
import { Shopping_List, Shopping_List_Set_Input } from 'src/generated/graphql';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShoppingListService } from 'src/app/shared/services/graphQL/shoppingList/shopping-list.service';
import { IsLoadingService } from '@service-work/is-loading';

import { CRUD_MODE } from 'src/app/shared/enums';

import { CrudBaseComponent } from 'src/app/shared/classes/crud-base.component';

import { CrudBarService } from 'src/app/shared/components/ui/crud-bar/crud-bar.service';

@Component({
  selector: 'app-shopping-list-update',
  templateUrl: './shopping-list-update.component.html',
  styleUrls: ['./shopping-list-update.component.scss']
})
export class ShoppingListUpdateComponent extends CrudBaseComponent<Shopping_List> implements OnInit {


  @Input() shoppingList: Shopping_List;

  shoppingListForm: FormGroup;



  constructor(private fb: FormBuilder,
    service: ShoppingListService,
    crudBarService: CrudBarService,
    isLoadingService: IsLoadingService) {
    super(CRUD_MODE.Update, isLoadingService, crudBarService, service);
  }

  ngOnInit() {

    this.buildForm();
    super.ngOnInit();
  }

  private buildForm() {

    this.shoppingListForm = this.fb.group(
      {
        name: [this.shoppingList.name, Validators.required],
        favourite: ['', Validators.required]
      }
    )
  }

  public buildDataObject() {

    const itemData: Shopping_List_Set_Input = {
      id: this.shoppingList.id,
      name: this.shoppingListForm.value.name

    }

    return itemData;
  }

  get id() {
    return this.shoppingList.id;
  }


}
