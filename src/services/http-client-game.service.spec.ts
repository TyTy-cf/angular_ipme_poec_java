import { TestBed } from '@angular/core/testing';

import { HttpClientGameService } from './http-client-game.service';

describe('HttpClientGameService', () => {
  let service: HttpClientGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpClientGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
