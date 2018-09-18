import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventControlMenuComponent } from './event-control-menu.component';

describe('EventControlMenuComponent', () => {
  let component: EventControlMenuComponent;
  let fixture: ComponentFixture<EventControlMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventControlMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventControlMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
