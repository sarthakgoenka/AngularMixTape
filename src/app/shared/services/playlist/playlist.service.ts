import { PlayerService } from './../player/player.service';
import { User } from './../../../store/models/user.model';
import { State } from './../../../store/index';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {Song} from "../../../store/models/song.model";

@Injectable()
export class PlaylistService {
  user: User;
  constructor(private store: Store<State>, private player: PlayerService) {

  }

  /**
   * Creates a playlist for the current user.
   *
   * @param name
   *  the name for the playlist.
   */
  createPlaylist(name: string, imageFile: File) {

  }

  /**
   * Save an image for a playlist.
   */
  savePlaylistImage(file: File) {

  }

  /**
   * Add a song to a playlist
   */
  addSongToPlaylist(song: Song, playlist: string) {

  }

  /**
   * Get all songs of a playlist.
   *
   * @param id
   *  the id of the playlist.
   */
  getPlaylistSongs(id: string) {

  }

  /**
   * Play a song
   *
   * @param song
   *  The song to play.
   */
  playSong(song: Song) {
  }

  /**
   * Create a playlist with song array
   *
   * @param songs
   *  The songs to play.
   */
  playSongs(songs: Song[]) {
  }
}
