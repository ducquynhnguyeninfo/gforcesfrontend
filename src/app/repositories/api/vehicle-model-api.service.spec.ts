import { TestBed } from '@angular/core/testing';

import { VehicleModelApiService } from './vehicle-model-api.service';

describe('VehicleModelApiService', () => {
  let service: VehicleModelApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VehicleModelApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
