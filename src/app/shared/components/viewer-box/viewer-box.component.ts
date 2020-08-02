import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewer-box',
  templateUrl: './viewer-box.component.html',
  styleUrls: ['./viewer-box.component.scss']
})
export class ViewerBoxComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
