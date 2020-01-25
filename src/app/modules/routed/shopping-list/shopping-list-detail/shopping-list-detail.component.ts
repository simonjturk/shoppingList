import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, mergeAll } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ShoppingListService } from 'src/app/shared/services/graphQL/shoppingList/shopping-list.service';
import { Shopping_List } from 'src/generated/graphql';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-shopping-list-detail',
  templateUrl: './shopping-list-detail.component.html',
  styleUrls: ['./shopping-list-detail.component.scss']
})
export class ShoppingListDetailComponent implements OnInit {
  shoppingListId$: Observable<string>;

  shoppingList$: Observable<Shopping_List>;

  hideCompleted: boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private shoppingListService: ShoppingListService) { }

  /*
  // Lifecycle hooks
  */

  ngOnInit() {

    this.shoppingListId$ = this.activatedRoute.paramMap
      .pipe(map((params: ParamMap) => params.get('id')))

    this.shoppingList$ = this.activatedRoute.paramMap
      .pipe(map((params: ParamMap) => params.get('id')))
      .pipe(map(id => {
        return this.shoppingListService.getShoppingListById(id)
      }), mergeAll())
  }


  hideCompletedChange(event: MatSlideToggleChange) {
    this.hideCompleted = event.checked;

  }
}
