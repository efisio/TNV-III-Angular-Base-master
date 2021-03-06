import { TestBed } from '@angular/core/testing';

import { ChartColorServiceService } from './chart-color-service.service';

describe('ChartColorServiceService', () => {
  let service: ChartColorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartColorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
