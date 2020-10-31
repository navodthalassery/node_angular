import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDetailsAddComponent } from './flight-details-add.component';

describe('FlightDetailsAddComponent', () => {
  let component: FlightDetailsAddComponent;
  let fixture: ComponentFixture<FlightDetailsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightDetailsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightDetailsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
