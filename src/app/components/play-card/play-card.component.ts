import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-play-card',
  templateUrl: './play-card.component.html',
  styleUrls: ['./play-card.component.scss']
})
export class PlayCardComponent implements OnInit {
  @Input() name: string;
  @Input() image: string;

  constructor() { }

  ngOnInit() {
  }

}
