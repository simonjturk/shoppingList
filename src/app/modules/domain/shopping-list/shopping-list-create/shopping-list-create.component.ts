import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Route, Router } from '@angular/router';
import { ShoppingListService } from 'src/app/shared/services/graphQL/shoppingList/shopping-list.service';

@Component({
  selector: 'app-shopping-list-create',
  templateUrl: './shopping-list-create.component.html',
  styleUrls: ['./shopping-list-create.component.scss']
})
export class ShoppingListCreateComponent implements OnInit, OnDestroy {

  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private router: Router, private shoppingListService: ShoppingListService) { }

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
  submit() {
    if (this.form.valid) {
      this.shoppingListService.createShoppingList({ name: this.model.listName })
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(res => {
          if (res.errors && res.errors.length > 0) {
            //TODO error stuff
          }
          const list = res.data.insert_shopping_list.returning.pop();

          console.log(list.name);

          //TODO rout to the shopping list
          this.router.navigate(['shopping-list', list.id]);
        })
    }
  }
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
