import { Observable } from 'rxjs/Observable';
import { User } from './../../store/models/user.model';
import { SONGS_ACTION_TYPES } from './../../store/actions/songs.actions';
import { Store } from '@ngrx/store';
import { State } from './../../store/index';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Artist } from './../../store/models/artist.model';
import { Album } from './../../store/models/album.model';
import { Song } from './../../store/models/song.model';
import { ArtistsAlbumService } from './../services/artists-album.service';

@Component({
  selector: 'app-artists-album-playable',
  templateUrl: './artists-album-playable.component.html',
  styleUrls: ['./artists-album-playable.component.scss']
})
export class ArtistsAlbumPlayableComponent implements OnInit {
  @Input() album: Album;
  @Input() artist: Artist;
  @Output() onAddSong = new EventEmitter();

  songs: Song[];
  info: string;

  user: Observable<User>;
  constructor(private store: Store<State>, private albumService: ArtistsAlbumService) { }

  ngOnInit() {
    // Start fetching songs.
    this.albumService.getAlbumSongs(this.album.id);
    this.user = this.store.select('user');
    // get these albums songs from the store.
    this.store.select('songs').filter(s => {
      return s[this.album.id];
    }).map(a => {
      return a[this.album.id];
    }).subscribe(s => {
      this.songs = s;
    });

    this.info = `Album of ${this.album.name}`;
  }

  /**
   * Handler to play a song.
   */
  playSong(song: Song) {
    this.albumService.playSong(song);
  }

  /**
   * Play this album
   */
  playAlbum() {
    this.albumService.playAlbum(this.album, this.songs);
  }

  /**
   * Add song to a playlist.
   */
  addSongToPlaylist(song: Song) {
    this.onAddSong.emit(song);
  }
}
