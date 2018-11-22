import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantListActionsComponent } from './participant-list-actions.component';

describe('ParticipantListActionsComponent', () => {
  let component: ParticipantListActionsComponent;
  let fixture: ComponentFixture<ParticipantListActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantListActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantListActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
