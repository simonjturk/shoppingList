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

  shoppingList$: Observable<Shopping_List>;

  constructor(private activatedRoute: ActivatedRoute, private shoppingListService: ShoppingListService) { }

  /*
  // Lifecycle hooks
  */

  ngOnInit() {


    this.shoppingList$ = this.activatedRoute.paramMap
      .pipe(map((params: ParamMap) => params.get('id')))
      .pipe(map(id => {
        return this.shoppingListService.readSingle(id)
      }), mergeAll())
  }



}
