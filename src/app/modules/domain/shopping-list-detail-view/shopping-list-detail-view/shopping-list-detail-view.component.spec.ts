import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListDetailViewComponent } from './shopping-list-detail-view.component';

describe('ShoppingListDetailViewComponent', () => {
  let component: ShoppingListDetailViewComponent;
  let fixture: ComponentFixture<ShoppingListDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
