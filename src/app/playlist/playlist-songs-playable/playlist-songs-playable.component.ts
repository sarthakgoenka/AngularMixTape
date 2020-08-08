import { Playlist } from './../../store/models/playlist.model';
import { Song } from './../../store/models/song.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-songs-playable',
  templateUrl: './playlist-songs-playable.component.html',
  styleUrls: ['./playlist-songs-playable.component.scss']
})
export class PlaylistSongsPlayableComponent implements OnInit {
  @Input() playlist: Playlist;
  @Input() songs: Song[];
  @Output() onPlaySong = new EventEmitter();
  @Output() onPlayAll = new EventEmitter();

  info: string;
  constructor() { }

  ngOnInit() {
    this.info = `Playlist by ${this.playlist.owner}`;
  }

  /**
   * Play all songs of the playlist.
   */
  playAll() {
    this.onPlayAll.emit(this.songs);
  }

  /**
   * Play a song.
   *
   * @param song
   *  Song to play.
   */
  playSong(song) {
    this.onPlaySong.emit(song);
  }

  /**
   * Remove song from playlist.
   *
   * @param song
   *  The song to remove.
   */
  removeFromPlaylist(song: Song) {

  }

}
