import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListRecordComponent } from './shopping-list-record.component';

describe('ShoppingListRecordComponent', () => {
  let component: ShoppingListRecordComponent;
  let fixture: ComponentFixture<ShoppingListRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
