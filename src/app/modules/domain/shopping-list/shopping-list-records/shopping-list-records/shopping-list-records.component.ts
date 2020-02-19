import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Shopping_List } from 'src/generated/graphql';

@Component({
  selector: 'app-shopping-list-records',
  templateUrl: './shopping-list-records.component.html',
  styleUrls: ['./shopping-list-records.component.scss']
})
export class ShoppingListRecordsComponent implements OnInit {

  @Input() heading: string = null;
  @Input() icon: string = null
  @Input() shoppingLists$: Observable<Shopping_List[]>;

  constructor() { }

  ngOnInit() {
  }

}
