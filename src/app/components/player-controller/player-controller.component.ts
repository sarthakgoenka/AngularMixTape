import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {MatSliderChange} from "@angular/material/slider";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-player-controller',
  templateUrl: './player-controller.component.html',
  styleUrls: ['./player-controller.component.scss']
})
export class PlayerControllerComponent implements OnInit {
  playing = true;
  volume = 0.5;
  collapsed = true;

  @Output() onTogglePlayer = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.updateSidenavForWindow();
  }


  updateSidenavForWindow() {
    if (isPlatformBrowser) {
      this.collapsed = true;
      if (window.innerWidth < 768) {
      } else {
        this.collapsed = false;
      }
    }
  }


  playerPause() {
    this.playing = false;
  }


  playerResume() {
    this.playing = true;
  }

  playerPrev() {
  }

  playerNext() {
  }

  updateVolume(sliderChange: MatSliderChange) {
    this.volume = sliderChange.value;
  }
  toggleExpandPlayer() {
    this.collapsed = this.collapsed ? false : true;
    this.onTogglePlayer.emit(this.collapsed);
  }
}
