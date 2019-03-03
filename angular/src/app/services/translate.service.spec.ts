import { TestBed, inject } from '@angular/core/testing';

import { TranslateHelperService } from './translate.service';

describe('TranslateHelperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TranslateHelperService]
    });
  });

  it('should be created', inject([TranslateHelperService], (service: TranslateHelperService) => {
    expect(service).toBeTruthy();
  }));
});
