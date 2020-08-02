import { PLAYER_ACTION_TYPES } from './../../store/actions/player.actions';
import { Album } from './../../store/models/album.model';
import { Song } from './../../store/models/song.model';
import { SONGS_ACTION_TYPES } from './../../store/actions/songs.actions';
import { Store } from '@ngrx/store';
import { State } from './../../store/index';
import { PlayerService } from './../../shared/services/player/player.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ArtistsAlbumService {

  constructor(private store: Store<State>, private player: PlayerService) { }

  /**
   * Get all songs from an album.
   *
   * @param albumId
   *  the album identifier.
   */
  getAlbumSongs(albumId) {
    this.store.dispatch({
      type: SONGS_ACTION_TYPES.SONGS_FROM_ALBUM,
      payload: {
        album: albumId
      }
    });
  }

  /**
   * Play a song from an album.
   *
   * @param song
   *  the song to play.
   */
  playSong(song: Song) {
    this.player.createPlayListOfSong(song);
  }

  /**
   * Play an album entirely
   */
  playAlbum(album: Album, songs: Song[]) {
    this.player.createPlayListOfListOfSongs(songs);
  }
}
