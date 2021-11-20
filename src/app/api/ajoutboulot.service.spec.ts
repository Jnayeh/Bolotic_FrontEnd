import { TestBed } from '@angular/core/testing';

import { AjoutboulotService } from './ajoutboulot.service';

describe('AjoutboulotService', () => {
  let service: AjoutboulotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjoutboulotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
