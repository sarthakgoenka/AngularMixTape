import { PlaylistService } from './../../shared/services/playlist/playlist.service';
import { Observable } from 'rxjs';
import { Playlist } from './../../store/models/playlist.model';
import { State } from './../../store/index';
import { Store } from '@ngrx/store';
import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-playlist-add-song',
  templateUrl: './playlist-add-song.component.html',
  styleUrls: ['./playlist-add-song.component.scss']
})
export class PlaylistAddSongComponent implements OnInit {
  playlists: Observable<Playlist[]>;
  selectedPlaylistId: string;

  addSongToPlaylistForm: FormGroup;

  constructor(private store: Store<State>,
    private playlistService: PlaylistService,
    private dialogRef: MatDialogRef<PlaylistAddSongComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.addSongToPlaylistForm = this.fb.group({
      selectedItem: [],
    });
    this.playlists = this.store.select('userPlaylists');
  }

  get selectedItem() {
    return this.addSongToPlaylistForm.get('selectedItem');
  }

  ngOnInit() { }

  changeItem(ev) {
    this.selectedPlaylistId = ev.value;
  }

  /**
   * Add the song to the current selected playlist.
   *
   * @param playlistId
   *  The playlist id to add to.
   */
  addSongToPlaylist(playlistId) {
    this.dialogRef.close();
    this.playlistService.addSongToPlaylist(this.data.song, playlistId);
  }

  /**
   * Callback for submit of form
   */
  onSubmit(value) {
    this.addSongToPlaylist(value.selectedItem);
  }
}
