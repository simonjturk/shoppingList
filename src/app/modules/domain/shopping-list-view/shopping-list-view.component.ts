import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from 'src/app/shared/services/graphQL/shoppingList/shopping-list.service';


@Component({
  selector: 'app-shopping-list-view',
  templateUrl: './shopping-list-view.component.html',
  styleUrls: ['./shopping-list-view.component.scss']
})
export class ShoppingListViewComponent implements OnInit {
  shoppingLists$;

  constructor(private service: ShoppingListService) { }

  ngOnInit() {

    this.shoppingLists$ = this.service.getShoppingList();
  }

}
