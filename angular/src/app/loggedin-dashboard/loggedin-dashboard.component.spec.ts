import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedinDashboardComponent } from './loggedin-dashboard.component';

describe('LoggedinDashboardComponent', () => {
  let component: LoggedinDashboardComponent;
  let fixture: ComponentFixture<LoggedinDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggedinDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggedinDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
