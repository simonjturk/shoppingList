import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListItemUpdateComponent } from './shopping-list-item-update.component';

describe('ShoppingListItemUpdateComponent', () => {
  let component: ShoppingListItemUpdateComponent;
  let fixture: ComponentFixture<ShoppingListItemUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListItemUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListItemUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
