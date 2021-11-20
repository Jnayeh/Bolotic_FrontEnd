import { TestBed } from '@angular/core/testing';

import { BoulotService } from './boulot.service';

describe('BoulotService', () => {
  let service: BoulotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoulotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
