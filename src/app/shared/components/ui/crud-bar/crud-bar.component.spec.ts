import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudBarComponent } from './crud-bar.component';

describe('CrudBarComponent', () => {
  let component: CrudBarComponent;
  let fixture: ComponentFixture<CrudBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
