import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OaDialogComponent } from './oa-dialog.component';

describe('OaDialogComponent', () => {
  let component: OaDialogComponent;
  let fixture: ComponentFixture<OaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
