import { TestBed } from '@angular/core/testing';

import { BillImageService } from './bill-image.service';

describe('BillImageService', () => {
  let service: BillImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BillImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
