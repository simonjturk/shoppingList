import { Component, OnInit, Input } from '@angular/core';
import { Shopping_List, Shopping_List_Set_Input } from 'src/generated/graphql';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ShoppingListService } from 'src/app/shared/services/graphQL/shoppingList/shopping-list.service';
import { IsLoadingService } from '@service-work/is-loading';
import { UnsubscribeBase } from 'src/app/shared/classes/unsubscribe-base';
import { CRUD_MODE } from 'src/app/shared/enums';
import { CRUD_BUTTONS } from 'src/app/shared/components/ui/crud-bar/crud-bar.component';

@Component({
  selector: 'app-shopping-list-update',
  templateUrl: './shopping-list-update.component.html',
  styleUrls: ['./shopping-list-update.component.scss']
})
export class ShoppingListUpdateComponent extends UnsubscribeBase implements OnInit {
  @Input() shoppingList: Shopping_List;

  shoppingListForm: FormGroup;



  constructor(private fb: FormBuilder, private service: ShoppingListService,
    private isLoadingService: IsLoadingService) {
    super();
  }

  ngOnInit() {

    this.buildForm();
  }

  private buildForm() {

    this.shoppingListForm = this.fb.group(
      {
        name: [this.shoppingList.name, Validators.required],
        favourite: ['', Validators.required]
      }
    )
  }

  action(action: CRUD_BUTTONS) {

    if (action = CRUD_BUTTONS.save) this.save()
  }

  save() {
    const changes: Shopping_List_Set_Input = {
      name: this.shoppingListForm.value.name,
      id: this.shoppingList.id
    }
    this.isLoadingService.add(this.service.update(changes), { key: "button" })

  }
}
