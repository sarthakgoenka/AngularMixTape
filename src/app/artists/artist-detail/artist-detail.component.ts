import { PlaylistAddSongComponent } from './../../components/playlist-add-song/playlist-add-song.component';
import { Song } from './../../store/models/song.model';
import { Album } from './../../store/models/album.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { State } from './../../store/index';
import { Store } from '@ngrx/store';

import { Artist } from './../../store/models/artist.model';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit, OnDestroy {
  artist: Artist;
  slug: string;
  albums: Observable<Album[]>;

  artistSubscription: Subscription;

  constructor(private route: ActivatedRoute, private store: Store<State>, public dialog: MatDialog, ) {
    this.artistSubscription = store.select('artists').subscribe(artists => {
      this.slug = route.snapshot.paramMap.get('slug');
      this.artist = artists.items[this.slug];
    });

    this.albums = store.select('albums').map(albums => {
      return typeof albums[this.slug] !== 'undefined' ? albums[this.slug] : [];
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.artistSubscription.unsubscribe();
  }

  /**
   * Add song to playlist.
   *
   * @param song
   *  song to add.
   */
  addSongToPlaylist(song: Song) {
    const dialogRef = this.dialog.open(PlaylistAddSongComponent, {
      width: '350px',
      data: {
        song: song,
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        
      }
    });
  }
}
