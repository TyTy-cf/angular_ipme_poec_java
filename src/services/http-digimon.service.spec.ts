import { TestBed } from '@angular/core/testing';

import { HttpDigimonService } from './http-digimon.service';

describe('HttpDigimonService', () => {
  let service: HttpDigimonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpDigimonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
