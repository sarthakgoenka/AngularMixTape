import { Filters } from './../../store/models/filters.model';
import { Router, Params } from '@angular/router';
import { State } from './../../store/index';
import { Store } from '@ngrx/store';
import { Artist } from './../../store/models/artist.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

import { ArtistStateType } from './../../store/reducers/artists.reducer';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.scss']
})
export class ArtistListComponent implements OnInit {
  filters: Observable<Filters>;
  artists: Observable<Artist[]>;
  limit = 6;

  constructor(private store: Store<State>, private router: Router) {
    this.filters = store.select('filters');
    this.artists = store.select('artists').map((artists: ArtistStateType) => {
      return artists.list.map(n => artists.items[n]);
    });
  }

  ngOnInit() {
  }

  handleFiltersChange(filters: Filters): void {
    this.router.navigate(['/artists', this.createParams(filters)]);
  }

  private createParams(filters: Filters): Params {
    const r: any = {};
    if (filters.limit) { r.limit = filters.limit; }
    return r;
  }

  incrementListSize() {
    this.handleFiltersChange({
      limit: this.limit * 2
    });
  }
}
