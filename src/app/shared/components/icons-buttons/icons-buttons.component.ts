import { IconItem } from './icons.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icons-buttons',
  templateUrl: './icons-buttons.component.html',
  styleUrls: ['./icons-buttons.component.scss']
})
export class IconsButtonsComponent implements OnInit {

  @Input() icons: IconItem[];
  @Input() large: boolean;

  constructor() { }

  ngOnInit() {
  }

}
