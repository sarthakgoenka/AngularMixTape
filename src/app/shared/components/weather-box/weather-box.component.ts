import { Component, OnInit, Input } from '@angular/core';
import { IconItem } from '../icons-buttons/icons.model';

@Component({
  selector: 'app-weather-box',
  templateUrl: './weather-box.component.html',
  styleUrls: ['./weather-box.component.scss']
})
export class WeatherBoxComponent implements OnInit {

  @Input() degree: string;
  @Input() hotness: string;
  @Input() city: string;
  @Input() image: string;
  // icons
  icons: IconItem[] = [
    {
      name: 'wb_sunny',
      color: 'primary',
      text: 'Sunny',
    },
    {
      name: 'wb_cloudy',
      color: 'accent',
      text: 'Cloudy',
    },
    {
      name: 'brightness_3',
      color: 'warn',
      text: 'Moonlight',
    },
    {
      name: 'brightness_6',
      color: 'primary',
      text: 'Mid sunny',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
