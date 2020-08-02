import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBoxComponent } from './weather-box.component';

describe('WeatherBoxComponent', () => {
  let component: WeatherBoxComponent;
  let fixture: ComponentFixture<WeatherBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
