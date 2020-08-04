import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-icon-box',
  templateUrl: './icon-box.component.html',
  styleUrls: ['./icon-box.component.scss']
})
export class IconBoxComponent implements OnInit {
  @Input() icon: string;
  @Input() number: string;
  @Input() title: string;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
