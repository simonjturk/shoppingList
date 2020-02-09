import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListItemRecordsComponent } from './shopping-list-item-records.component';

describe('ShoppingListItemRecordsComponent', () => {
  let component: ShoppingListItemRecordsComponent;
  let fixture: ComponentFixture<ShoppingListItemRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListItemRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListItemRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
