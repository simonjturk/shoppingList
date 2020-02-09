import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListItemRecordComponent } from './shopping-list-item-record.component';

describe('ShoppingListItemRecordComponent', () => {
  let component: ShoppingListItemRecordComponent;
  let fixture: ComponentFixture<ShoppingListItemRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListItemRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListItemRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
