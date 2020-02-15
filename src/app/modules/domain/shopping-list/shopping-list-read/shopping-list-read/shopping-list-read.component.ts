import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Shopping_List } from 'src/generated/graphql';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-shopping-list-read',
  templateUrl: './shopping-list-read.component.html',
  styleUrls: ['./shopping-list-read.component.scss']
})
export class ShoppingListReadComponent implements OnInit {
  @Input() shoppingList$: Observable<Shopping_List>;
  constructor() { }

  hideCompleted: boolean = true;
  ngOnInit() {
  }


  hideCompletedChange(event: MatSlideToggleChange) {
    this.hideCompleted = event.checked;

  }
}
