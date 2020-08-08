import { isPlatformBrowser } from '@angular/common';
import { Player } from './../../store/models/player.model';
import { State } from './../../store/index';
import { Store } from '@ngrx/store';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Song } from './../../store/models/song.model';

import { PlayerService } from './../../shared/services/player/player.service';
import {MatSliderChange} from "@angular/material/slider";

@Component({
  selector: 'app-player-controller',
  templateUrl: './player-controller.component.html',
  styleUrls: ['./player-controller.component.scss']
})
export class PlayerControllerComponent implements OnInit {
  playing = true;
  volume = 0.5;
  player: Observable<Player>;
  collapsed = true;

  @Output() onTogglePlayer = new EventEmitter();

  constructor(private store: Store<State>, private playerService: PlayerService) { }

  ngOnInit() {
    this.player = this.store.select('player');
   this.store.select('player').subscribe(dad=>{
     // console.log(dad)
   })

    this.updateSidenavForWindow();
  }

  /**
   * Update the sidenav property for the current window.
   */
  updateSidenavForWindow() {
    if (isPlatformBrowser) {
      if (window.innerWidth < 768) {
      } else {
        this.collapsed = false;
      }
    }
  }

  /**
   * Pause the player.
   */
  playerPause() {
    this.playerService.pause();
    this.playing = false;
  }

  /**
   * Resume playing.
   */
  playerResume() {
    this.playerService.resume();
    this.playing = true;
  }

  /**
   * Move to previous song (if exists).
   */
  playerPrev() {
    this.playerService.prev();
  }

  /**
   * Move to next song (if exists).
   */
  playerNext() {
    this.playerService.next();
  }

  /**
   * Change volume.
   */
  updateVolume(sliderChange: MatSliderChange) {
    this.volume = sliderChange.value;
    this.playerService.updateVolume(this.volume);
  }

  /**
   * Expand player controls on mobile.
   */
  toggleExpandPlayer() {
    this.collapsed = this.collapsed ? false : true;
    this.onTogglePlayer.emit(this.collapsed);
  }
}
