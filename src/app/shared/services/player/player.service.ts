import { Song } from './../../../store/models/song.model';
import { PLAYER_ACTION_TYPES } from './../../../store/actions/player.actions';
import { State } from './../../../store/index';
import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Howl } from 'howler';

@Injectable()
export class PlayerService {
  player: Howl;
  playingIndex = 0;
  songList: Song[];
  volume = 0.5;
  constructor(private store: Store<State>) { }

  /**
   * Add one single song to the player.
   *
   * @param song
   *  The song to add.
   */
  createPlayListOfSong(song: Song) {
    this.songList = [song];
    this.playSong(0);
    this.store.dispatch({
      type: PLAYER_ACTION_TYPES.PLAYER_ADD_SONG,
      payload: {
        song: song,
      }
    });
    this.store.dispatch({
      type: PLAYER_ACTION_TYPES.PLAYER_PLAY_SONG,
      payload: {
        song: song,
      }
    });
  }

  /**
   * Add a list of songs to the player.
   *
   * @param songs
   *  the song array.
   */
  createPlayListOfListOfSongs(songs: Song[]) {
    this.songList = songs;
    this.playSong(0);
    this.store.dispatch({
      type: PLAYER_ACTION_TYPES.PLAYER_ADD_SONGS,
      payload: {
        songs: songs,
      }
    });
    this.store.dispatch({
      type: PLAYER_ACTION_TYPES.PLAYER_PLAY_SONG,
      payload: {
        song: songs[0],
      }
    });
  }

  /**
   *
   * Play a song from the queue.
   *
   * @param index
   */
  playQueueSong(index) {
    this.playSong(0);
    this.store.dispatch({
      type: PLAYER_ACTION_TYPES.PLAYER_PLAY_SONG,
      payload: {
        song: this.songList[index],
      }
    });
  }

  /**
    *
    * Remove a song from the queue.
    *
    * @param song
    *   The song to remove.
    */
  removeQueueSong(song: Song) {
    const indexToRemove = this.songList.indexOf(song);
    if (this.playingIndex == indexToRemove) {
      const newIndex = this.songList.length > indexToRemove ? indexToRemove + 1 : 0;
      this.playSong(indexToRemove + 1);
      this.store.dispatch({
        type: PLAYER_ACTION_TYPES.PLAYER_PLAY_SONG,
        payload: {
          song: this.songList[newIndex],
        }
      });
    }
    this.store.dispatch({
      type: PLAYER_ACTION_TYPES.PLAYER_REMOVE_SONG,
      payload: {
        song: song,
      }
    });
  }

  /**
   *
   * Removes all songs from Queue
   */
  removeAllQueueSongs() {
    this.store.dispatch({
      type: PLAYER_ACTION_TYPES.PLAYER_REMOVE_ALL_SONGS,
      payload: {}
    });
    this.stop();
  }

  /**
   * Play a specific sound.
   *
   * @param id
   *  The sound id to play.
   */
  playSong(id) {
    this.stop();
    this.player = new Howl({
      src: this.songList[id].url,
      html5: true,
      volume: this.volume,
    });
    this.player.play();
  }

  /**
   * Stop the player.
   */
  stop() {
    if (this.player) {
      this.player.stop();
    }
  }

  /**
   * Pause the player.
   */
  pause() {
    this.player.pause();
  }

  /**
   * Resume the player.
   */
  resume() {
    this.player.play();
  }

  /**
   * Move to previous song.
   */
  prev() {
    if (this.playingIndex > 0) {
      this.playSong(this.playingIndex - 1);
      this.playingIndex -= 1;
      this.updateSongPlaying();
    }
  }

  /**
   * Move to next song.
   */
  next() {
    if (this.playingIndex < this.songList.length - 1) {
      this.playSong(this.playingIndex + 1);
      this.playingIndex += 1;
      this.updateSongPlaying();
    }
  }

  /**
   * Update the player volume.
   *
   * @param volume
   *  The new volume for the player.
   */
  updateVolume(volume: number) {
    this.volume = volume;
    this.player.volume(volume);
  }

  /**
   * Update the player in store with the current song playing.
   */
  updateSongPlaying() {
    this.store.dispatch({
      type: PLAYER_ACTION_TYPES.PLAYER_PLAY_SONG,
      payload: {
        song: this.songList[this.playingIndex],
      }
    });
  }
}
