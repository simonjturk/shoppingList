import { Injectable } from '@angular/core';
import { Shopping_List_Routes, CreateShoppinghListStateGQL, GetShoppingListsGQL, GetShoppingListStateGQL, Shopping_List } from 'src/generated/graphql';
import { ShoppingListService } from 'src/app/shared/services/graphQL/shoppingList/shopping-list.service';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeBase } from 'src/app/shared/classes/unsubscribe-base';
import { Observable, PartialObserver, from, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListRoutesService extends UnsubscribeBase {

  currentIndex: number = null;
  shoppingList: Shopping_List[];

  private listLoaded = new Subject();

  constructor(private shoppingListService: ShoppingListService) {
    super();

    this.shoppingListService.readAll()
      .pipe(takeUntil(this.onDestroy$))
      .subscribe(res => {
        this.shoppingList = res

        this.listLoaded.next(true);

      })
  }

  setRoute(shoppingListId: string) {
    this.listLoaded.subscribe(x => {
      this.shoppingList.findIndex(x => x.id === shoppingListId);
    })

  }


  getNext(): string {
    this.currentIndex++;
    return this.getShoppingListId();
  }

  getPrevious(): string {
    this.currentIndex--;
    return this.getShoppingListId();
  }

  private getShoppingListId(): string {
    return this.shoppingList[this.currentIndex].id;
  }

  get isLast(): boolean {
    return this.currentIndex === this.shoppingList.length - 1;
  }
  get isFirst(): boolean {
    return this.currentIndex === 0;
  }


}
