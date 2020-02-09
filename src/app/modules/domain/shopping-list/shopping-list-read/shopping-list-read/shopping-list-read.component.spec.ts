import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListReadComponent } from './shopping-list-read.component';

describe('ShoppingListReadComponent', () => {
  let component: ShoppingListReadComponent;
  let fixture: ComponentFixture<ShoppingListReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
