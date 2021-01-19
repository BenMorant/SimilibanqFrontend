import { TestBed } from '@angular/core/testing';

import { SimilibanqService } from './similibanq.service';

describe('SimilibanqService', () => {
  let service: SimilibanqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimilibanqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
