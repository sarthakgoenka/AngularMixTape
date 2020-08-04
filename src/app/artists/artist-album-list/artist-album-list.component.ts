import { Song } from './../../store/models/song.model';
import { Artist } from './../../store/models/artist.model';
import { Album } from './../../store/models/album.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-artist-album-list',
  templateUrl: './artist-album-list.component.html',
  styleUrls: ['./artist-album-list.component.scss']
})
export class ArtistAlbumListComponent implements OnInit {
  @Input() albums: Album[];
  @Input() artist: Artist;
  @Output() onAddSong = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  /**
   * Add a song to a playlist.
   *
   * @param song
   *  song to add .
   */
  addSongToPlaylist(song: Song) {
    this.onAddSong.emit(song);
  }

}
