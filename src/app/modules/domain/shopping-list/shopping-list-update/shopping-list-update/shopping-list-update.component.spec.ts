import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListUpdateComponent } from './shopping-list-update.component';

describe('ShoppingListUpdateComponent', () => {
  let component: ShoppingListUpdateComponent;
  let fixture: ComponentFixture<ShoppingListUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
