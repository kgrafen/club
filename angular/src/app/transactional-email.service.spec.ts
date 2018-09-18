import { TestBed, inject } from '@angular/core/testing';

import { TransactionalEmailService } from './transactional-email.service';

describe('TransactionalEmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransactionalEmailService]
    });
  });

  it('should be created', inject([TransactionalEmailService], (service: TransactionalEmailService) => {
    expect(service).toBeTruthy();
  }));
});
