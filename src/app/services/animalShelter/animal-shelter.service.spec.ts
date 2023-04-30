import { TestBed } from '@angular/core/testing';

import { AnimalShelterService } from './animal-shelter.service';

describe('AnimalShelterService', () => {
  let service: AnimalShelterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalShelterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
