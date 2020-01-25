import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

import { Shopping_List_Items, Product_Categories } from 'src/generated/graphql';
import { Observable } from 'rxjs';
import { ShoppingListItemService } from 'src/app/shared/services/graphQL/shoppingListItem/shopping-list-item.service';
import { map } from 'rxjs/operators';
import { MatSlideToggleChange } from '@angular/material';

@Component({
  selector: 'app-shopping-list-item-list',
  templateUrl: './shopping-list-item-list.component.html',
  styleUrls: ['./shopping-list-item-list.component.scss']
})
export class ShoppingListItemListComponent implements OnInit, OnChanges {

  @Input() shoppingListId: string;

  shoppingListItems$: Observable<any[]>

  @Input() hideCompleted: boolean = false;

  constructor(private shoppingListItemService: ShoppingListItemService) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.shoppingListId) {
      this.shoppingListItems$ =
        this.shoppingListItemService.getShoppingListItems(this.shoppingListId);
    }

  }

  getItemCategories(items: Shopping_List_Items[]): Product_Categories[] {
    const categories = [...new Set(items.map(i => i.product.category))]
    return categories;
  }

  getItemsByCategory(items: Shopping_List_Items[], category: string): Shopping_List_Items[] {
    return items.filter(item => {
      return item.product.category.name === category
    })
  }

  getCountItemsByCategory(items: Shopping_List_Items[], categoryId: string) {
    return {
      completed: items.filter(i => i.complete === true && i.product.category.id === categoryId).length,
      remaining: items.filter(i => i.complete === false && i.product.category.id === categoryId).length,
      total: items.filter(i => i.product.category.id === categoryId).length
    }

  }
  hideCompletedChange(event: MatSlideToggleChange) {
    this.hideCompleted = event.checked;

  }


}
