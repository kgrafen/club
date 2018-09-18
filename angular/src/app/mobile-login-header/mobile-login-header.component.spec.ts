import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileLoginHeaderComponent } from './mobile-login-header.component';

describe('MobileLoginHeaderComponent', () => {
  let component: MobileLoginHeaderComponent;
  let fixture: ComponentFixture<MobileLoginHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileLoginHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileLoginHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
