import { HttpClient } from '@angular/common/http';
import { PlaylistsFilters } from './../../models/playlistFilters.model';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { ActivatedRouteSnapshot, Params } from '@angular/router';
import { Song } from './../../models/song.model';
import { SongAddToPlaylistAction, SongsAddToPlaylistAction } from './../../actions/songs.actions';
import { Playlist } from './../../models/playlist.model';
import { USER_ACTION_TYPES } from './../../actions/user.action';
import { Injectable } from '@angular/core';

import {Actions, Effect, ofType} from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { State } from './../../index';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/take';

import {
  PLAYLIST_ACTION_TYPES,
  PlaylistGetSongsAction,
  PlaylistGetAllAction
} from './../../actions/playlist.actions';
import { secondSegment, filterAllSegments, firstSegment, createFilters } from '../helpers';
import {catchError, filter, map, switchMap, withLatestFrom} from "rxjs/operators";
import {of} from "rxjs";

@Injectable()
export class PlaylistEffect {
  data: any;
  constructor(
    private http: HttpClient,
    private store: Store<State>,
    private actions$: Actions) {
    this.data = this.http.get('assets/data/database.json');
  }

  @Effect() navigateToPlaylists = this.handleNavigation('playlists/explore', (routerSnapshot: ActivatedRouteSnapshot) => {
    const filters = createFilters(routerSnapshot.params);
    return this.data.map((data: any) => {
      const playlists = Object.keys(data.playlists).map((k) => data.playlists[k]);
      return playlists.map((playlistSongs: Object) => {
        const playlist = Object.keys(playlistSongs).map(k => {
          const playlistWithKey = playlistSongs[k];
          playlistWithKey.id = k;
          return playlistWithKey;
        });
        return playlist;
      });
    }).switchMap((allPlaylists) => {
      return Observable.of(new PlaylistGetAllAction({
        playlists: [].concat.apply([], allPlaylists),
      }));
    });
  });


  private handleNavigation(segment:string, callback:(a:ActivatedRouteSnapshot, state:State)=>Observable<any>) {
    const nav = this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: any) => filterAllSegments(r, segment)),
      map(firstSegment)
    )
    return nav.pipe(
      withLatestFrom(this.store),
      switchMap(a => callback(a[0], a[1])),
      catchError(e => {
        console.log('Network error', e);
        return of("network Error");
      })
    )}

  private handleSecondaryNavigation(segment: string,
                                    callback: (a: ActivatedRouteSnapshot,state: State) => Observable<any>) {
    const nav = this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      filter((r: any) => filterAllSegments(r, segment)),
      map(secondSegment))

    return nav.pipe(
      withLatestFrom(this.store),

      switchMap(a => callback(a[0], a[1])),
      catchError(e => {
        console.log('Network error', e);
        return of("network Error");
      }))
  }

}
