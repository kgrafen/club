import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorizationAlertSheetComponent } from './authorization-alert-sheet.component';

describe('AuthorizationAlertSheetComponent', () => {
  let component: AuthorizationAlertSheetComponent;
  let fixture: ComponentFixture<AuthorizationAlertSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorizationAlertSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorizationAlertSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
