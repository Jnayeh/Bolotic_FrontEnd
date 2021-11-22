import { TestBed } from '@angular/core/testing';

import { AuthRecruteurGuard } from './auth-recruteur.guard';

describe('AuthRecruteurGuard', () => {
  let guard: AuthRecruteurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthRecruteurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
