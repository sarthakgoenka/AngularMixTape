import { PlayerService } from './../player/player.service';
import { Song } from './../../../store/models/song.model';
import { User } from './../../../store/models/user.model';
import {
  PlaylistAddAction,
  PlaylistAddImageAction,
  PlaylistAddSongAction,
  PlaylistGetSongsAction
} from './../../../store/actions/playlist.actions';
import { State } from './../../../store/index';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';

@Injectable()
export class PlaylistService {
  user: User;
  constructor(private store: Store<State>, private player: PlayerService) {
    this.store.select('user').take(1).subscribe((u: User) => {
      this.user = u;
    });
  }

  /**
   * Creates a playlist for the current user.
   *
   * @param name
   *  the name for the playlist.
   */
  createPlaylist(name: string, imageFile: File) {
    this.store.dispatch(new PlaylistAddAction({
      uid: this.user.uid,
      owner: this.user.username,
      name: name,
      imageFile: imageFile,
    }));
  }

  /**
   * Save an image for a playlist.
   */
  savePlaylistImage(file: File) {
    this.store.dispatch(new PlaylistAddImageAction({
      uid: this.user.uid,
      file: file,
    }));
  }

  /**
   * Add a song to a playlist
   */
  addSongToPlaylist(song: Song, playlist: string) {
    this.store.dispatch(new PlaylistAddSongAction({
      song: song,
      playlist: playlist,
    }));
  }

  /**
   * Get all songs of a playlist.
   *
   * @param id
   *  the id of the playlist.
   */
  getPlaylistSongs(id: string) {
    this.store.dispatch(new PlaylistGetSongsAction({
      id: id,
    }));
  }

  /**
   * Play a song
   *
   * @param song
   *  The song to play.
   */
  playSong(song: Song) {
    this.player.createPlayListOfSong(song);
  }

  /**
   * Create a playlist with song array
   *
   * @param songs
   *  The songs to play.
   */
  playSongs(songs: Song[]) {
    this.player.createPlayListOfListOfSongs(songs);
  }
}
