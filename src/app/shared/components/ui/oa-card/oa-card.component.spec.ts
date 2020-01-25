import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OaCardComponent } from './oa-card.component';

describe('OaCardComponent', () => {
  let component: OaCardComponent;
  let fixture: ComponentFixture<OaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
