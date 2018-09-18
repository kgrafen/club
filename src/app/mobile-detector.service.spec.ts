import { TestBed, inject } from '@angular/core/testing';

import { MobileDetectorService } from './mobile-detector.service';

describe('MobileDetectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MobileDetectorService]
    });
  });

  it('should be created', inject([MobileDetectorService], (service: MobileDetectorService) => {
    expect(service).toBeTruthy();
  }));
});
