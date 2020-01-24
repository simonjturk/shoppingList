import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductPopupComponent } from './create-product-popup.component';

describe('CreateProductPopupComponent', () => {
  let component: CreateProductPopupComponent;
  let fixture: ComponentFixture<CreateProductPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProductPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
