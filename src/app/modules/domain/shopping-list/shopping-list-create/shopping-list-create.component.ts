import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { Route, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shared/services/graphQL/shoppingList/shopping-list.service';
import { CrudBaseComponent } from 'src/app/shared/classes/crud-base.component';
import { Shopping_List } from 'src/generated/graphql';
import { CRUD_MODE } from 'src/app/shared/enums';
import { IsLoadingService } from '@service-work/is-loading';
import { CrudBarService } from 'src/app/shared/components/ui/crud-bar/crud-bar.service';

@Component({
  selector: 'app-shopping-list-create',
  templateUrl: './shopping-list-create.component.html',
  styleUrls: ['./shopping-list-create.component.scss']
})
export class ShoppingListCreateComponent extends CrudBaseComponent<Shopping_List> implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    isLoadingService: IsLoadingService,
    shoppingListService: ShoppingListService,
    crudBarService: CrudBarService
  ) {

    super(CRUD_MODE.Create, isLoadingService, crudBarService, shoppingListService)
  }

  ngOnInit() {
  }

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'listName',
      type: 'input',
      templateOptions: {
        label: 'List Name',
        placeholder: 'Name your shopping list',
        addonLeft: {
          class: 'fa fa-dashboard',
        },
        required: true,
      },
    },
  ];

  ngOnDestroy(): void {
    super.ngOnDestroy();
  }



  /**
   * calls the base save method, gets the result and then route to the new shopping List
   *
   * @memberof ShoppingListCreateComponent
   */
  public saveAndNavigate() {

    const baseSave = super.save() as Observable<Shopping_List[]>

    baseSave.pipe(map(res => {
      const list = res.pop();
      //TODO rout to the shopping list
      this.router.navigate(['shopping-list', list.id]);

      return res;
    })).subscribe()
  }

  public buildDataObject() {
    return { name: this.model.listName } as Shopping_List
  }
}
