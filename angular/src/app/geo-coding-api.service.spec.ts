import { TestBed, inject } from '@angular/core/testing';

import { GeoCodingApiService } from './geo-coding-api.service';

describe('GeoCodingApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeoCodingApiService]
    });
  });

  it('should be created', inject([GeoCodingApiService], (service: GeoCodingApiService) => {
    expect(service).toBeTruthy();
  }));
});
