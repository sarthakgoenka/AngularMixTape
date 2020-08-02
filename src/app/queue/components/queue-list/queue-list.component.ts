import { PlayerService } from './../../../shared/services/player/player.service';

import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Song } from './../../../store/models/song.model';
import { State } from './../../../store/index';

@Component({
  selector: 'app-queue-list',
  templateUrl: './queue-list.component.html',
  styleUrls: ['./queue-list.component.scss']
})
export class QueueListComponent implements OnInit {
  queue: Observable<Song[]>;
  constructor(private store: Store<State>, private player: PlayerService) { }

  ngOnInit() {
    this.queue = this.store.select('player', 'songs');
  }

  playSong(index: number) {
    this.player.playQueueSong(index);
  }

  removeSongFromQueue(song: Song) {
    this.player.removeQueueSong(song);
  }

  removeAll() {
    this.player.removeAllQueueSongs();
  }
}
