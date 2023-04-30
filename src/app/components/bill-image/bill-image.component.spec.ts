import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillImageComponent } from './bill-image.component';

describe('BillImageComponent', () => {
  let component: BillImageComponent;
  let fixture: ComponentFixture<BillImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
