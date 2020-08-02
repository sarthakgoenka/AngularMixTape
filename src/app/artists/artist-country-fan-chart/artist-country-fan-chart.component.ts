import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-artist-country-fan-chart',
  templateUrl: './artist-country-fan-chart.component.html',
  styleUrls: ['./artist-country-fan-chart.component.scss']
})
export class ArtistCountryFanChartComponent implements OnInit {
  @Input() data = [
    {
      'name': 'Germany',
      'value': 40632
    },
    {
      'name': 'United States',
      'value': 49737
    },
    {
      'name': 'France',
      'value': 36745
    },
    {
      'name': 'United Kingdom',
      'value': 36240
    },
    {
      'name': 'Spain',
      'value': 33000
    },
    {
      'name': 'Italy',
      'value': 35800
    }
  ];


  view: any[] = [400, 200];

  // options
  showLegend = false;

  colorScheme = {
    domain: ['#FDD835', '#3F51B5', '#009688', '#EF6C00', '#7aa3e5', '#AAAAAA']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor() {

  }

  onSelect(event) {
    
  }

  ngOnInit() {
  }

}
