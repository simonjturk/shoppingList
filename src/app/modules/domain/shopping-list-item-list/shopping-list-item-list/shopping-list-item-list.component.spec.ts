import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListItemListComponent } from './shopping-list-item-list.component';

describe('ShoppingListItemListComponent', () => {
  let component: ShoppingListItemListComponent;
  let fixture: ComponentFixture<ShoppingListItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
