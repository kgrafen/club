import { TestBed, inject } from '@angular/core/testing';

import { EventFirebaseService } from './event-firebase.service';

describe('EventFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventFirebaseService]
    });
  });

  it('should be created', inject([EventFirebaseService], (service: EventFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
