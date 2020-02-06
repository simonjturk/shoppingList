import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OaAutocompleteComponent } from './oa-autocomplete.component';

describe('OaAutocompleteComponent', () => {
  let component: OaAutocompleteComponent;
  let fixture: ComponentFixture<OaAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OaAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OaAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
