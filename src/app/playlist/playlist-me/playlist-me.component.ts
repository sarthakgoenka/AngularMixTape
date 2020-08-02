import { Playlist } from './../../store/models/playlist.model';
import { State } from './../../store/index';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-me',
  templateUrl: './playlist-me.component.html',
  styleUrls: ['./playlist-me.component.scss']
})
export class PlaylistMeComponent implements OnInit {
  playlists$: Observable<Playlist[]>;

  constructor(private store: Store<State>) {
    this.playlists$ = store.select('userPlaylists');
  }

  ngOnInit() {
  }

}
