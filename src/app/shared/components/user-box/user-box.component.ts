import { IconItem } from './../icons-buttons/icons.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-box',
  templateUrl: './user-box.component.html',
  styleUrls: ['./user-box.component.scss']
})
export class UserBoxComponent implements OnInit {

  @Input() username: string;
  @Input() image: string;
  // icons
  icons: IconItem[] = [
    {
      name: 'alarm_on',
      color: 'primary',
      text: 'Alarm',
    },
    {
      name: 'portable_wifi_off',
      color: 'accent',
      text: 'Wifi',
    },
    {
      name: 'fingerprint',
      color: 'warn',
      text: 'Unlock',
    },
    {
      name: 'power_settings_new',
      color: 'primary',
      text: 'Power off',
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
