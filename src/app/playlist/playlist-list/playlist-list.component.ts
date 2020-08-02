import { Params, Router } from '@angular/router';
import { PlaylistsFilters } from './../../store/models/playlistFilters.model';
import { State } from './../../store/index';
import { Store } from '@ngrx/store';
import { Playlist } from './../../store/models/playlist.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {
  playlists$: Observable<Playlist[]>;

  playlistFilters: Observable<PlaylistsFilters>;
  limit = 9;

  constructor(private store: Store<State>, private router: Router) {
    this.playlistFilters = store.select('filters');
    this.playlists$ = store.select('playlists');
  }

  ngOnInit() {
  }

  handleFiltersChange(filters: PlaylistsFilters): void {
    this.router.navigate(['/playlists/explore', this.createParams(filters)]);
  }

  private createParams(filters: PlaylistsFilters): Params {
    const r: any = {};
    if (filters.limit) { r.limit = filters.limit; }
    return r;
  }

  incrementListSize() {
    console.log('Scrolled');
    this.handleFiltersChange({
      limit: this.limit * 2
    });
  }

}
