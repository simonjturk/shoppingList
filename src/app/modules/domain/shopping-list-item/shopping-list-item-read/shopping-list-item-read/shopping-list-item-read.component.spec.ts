import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListItemReadComponent } from './shopping-list-item-read.component';

describe('ShoppingListItemReadComponent', () => {
  let component: ShoppingListItemReadComponent;
  let fixture: ComponentFixture<ShoppingListItemReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListItemReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListItemReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
