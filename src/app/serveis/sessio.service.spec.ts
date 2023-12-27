import { TestBed } from '@angular/core/testing';

import { SessioService } from './sessio.service';

describe('SessioService', () => {
  let service: SessioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
