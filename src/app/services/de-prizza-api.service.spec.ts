import { TestBed } from '@angular/core/testing';

import { DePrizzaApiService } from './de-prizza-api.service';

describe('DePrizzaApiService', () => {
  let service: DePrizzaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DePrizzaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
