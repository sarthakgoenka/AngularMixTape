import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistCountryFanChartComponent } from './artist-country-fan-chart.component';

describe('ArtistCountryFanChartComponent', () => {
  let component: ArtistCountryFanChartComponent;
  let fixture: ComponentFixture<ArtistCountryFanChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistCountryFanChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistCountryFanChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
