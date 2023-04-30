import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalShelterComponent } from './animal-shelter.component';

describe('AnimalShelterComponent', () => {
  let component: AnimalShelterComponent;
  let fixture: ComponentFixture<AnimalShelterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalShelterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
