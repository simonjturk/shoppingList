import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , ParamMap} from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-list-detail',
  templateUrl: './shopping-list-detail.component.html',
  styleUrls: ['./shopping-list-detail.component.scss']
})
export class ShoppingListDetailComponent implements OnInit {
  shoppingListId$: Observable<string>;


  constructor(private activatedRoute: ActivatedRoute) { }

  /*
  // Lifecycle hooks
  */

  ngOnInit() {
    this.shoppingListId$ = this.activatedRoute.paramMap
    .pipe(map((params:ParamMap)=> params.get('id')))
  }

}
