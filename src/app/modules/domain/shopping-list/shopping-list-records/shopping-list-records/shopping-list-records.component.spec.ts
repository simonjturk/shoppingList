import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListRecordsComponent } from './shopping-list-records.component';

describe('ShoppingListRecordsComponent', () => {
  let component: ShoppingListRecordsComponent;
  let fixture: ComponentFixture<ShoppingListRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
