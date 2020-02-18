import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map, mergeAll } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ShoppingListService } from 'src/app/shared/services/graphQL/shoppingList/shopping-list.service';
import { Shopping_List } from 'src/generated/graphql';
import { ShoppingListRoutesService } from 'src/app/core/state/shopping-list-route/shopping-list-routes.service';


@Component({
  selector: 'app-shopping-list-detail',
  templateUrl: './shopping-list-detail.component.html',
  styleUrls: ['./shopping-list-detail.component.scss']
})
export class ShoppingListDetailComponent implements OnInit {

  shoppingList$: Observable<Shopping_List>;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private shoppingListService: ShoppingListService, private shoppingListRoutesService: ShoppingListRoutesService) { }

  /*
  // Lifecycle hooks
  */

  ngOnInit() {


    this.shoppingList$ = this.activatedRoute.paramMap
      .pipe(map((params: ParamMap) => params.get('id')))
      .pipe(map(id => {
        this.shoppingListRoutesService.setRoute(id);

        return this.shoppingListService.readSingle(id)
      }), mergeAll())
  }

  onSwipeNext(eventData) {
    console.log("next: " + eventData);
    if (!this.shoppingListRoutesService.isLast) {
      const nextId = this.shoppingListRoutesService.getNext();
      this.router.navigate(['shopping-list', nextId])

    }
  }

  onSwipePrevious(eventData) {
    console.log("previous: " + eventData);
    if (!this.shoppingListRoutesService.isFirst) {
      const prevId = this.shoppingListRoutesService.getPrevious();
      this.router.navigate(['shopping-list', prevId])

    }
  }


}
