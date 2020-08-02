import { SongsOfAlbumUpdatedAction, SONGS_ACTION_TYPES } from './../../actions/songs.actions';
import { Song } from './../../models/song.model';
import { AlbumsOfArtistUpdatedAction, ALBUMS_ACTION_TYPES } from './../../actions/albums.actions';
import { Album } from './../../models/album.model';
import { ARTISTS_ACTION_TYPES } from './../../actions/artists.actions';
import { Artist } from './../../models/artist.model';
import { ROUTER_NAVIGATION, RouterNavigationAction } from '@ngrx/router-store';
import { Params, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/merge';

import * as firebase from 'firebase/app';

import { State } from './../../index';
import { Filters } from './../../models/filters.model';
import { secondSegment, filterAllSegments, firstSegment, createFilters } from '../helpers';
import {AngularFireDatabase} from "@angular/fire/database";

@Injectable()
export class ArtistsEffects {
    constructor(
        private db: AngularFireDatabase,
        private store: Store<State>,
        private actions$: Actions) { }

    @Effect() navigateToArtists = this.handleNavigation('artists',
        (routerSnapshot: ActivatedRouteSnapshot) => {
            const filters = createFilters(routerSnapshot.params);
            return this.db.list('/artists', ref => ref.limitToFirst(filters.limit)).valueChanges()
                .map((artists: any[]) => {
                    const list = artists.map(artist => artist.slug);
                    const items = {};
                    Object.assign(items, ...artists.map(artist => ({ [artist.slug]: artist })));
                    return { type: ARTISTS_ACTION_TYPES.ARTISTS_UPDATED, payload: { items: items, list: list } };
                });
        });

    @Effect() navigateToArtistDetail = this.handleSecondaryNavigation('artists/:slug',
        (routerSnapshot: ActivatedRouteSnapshot, state: State) => {
            const slug = routerSnapshot.paramMap.get('slug');
            return this.db.object(`/artists/${slug}`).valueChanges().map((artist: Artist) => {
                return { type: ARTISTS_ACTION_TYPES.ARTIST_UPDATED, payload: artist };
            });
        });

    @Effect() navigateToArtistDetailGetAlbums = this.handleSecondaryNavigation('artists/:slug',
        (routerSnapshot: ActivatedRouteSnapshot, state: State) => {
            const slug = routerSnapshot.paramMap.get('slug');
            return this.db.list(`/albums/${slug}`).valueChanges().map((albums: Album[]) => {
                return new AlbumsOfArtistUpdatedAction({
                    artist: slug,
                    albums: albums,
                });
            });
        });

    @Effect() albumGetSongs$: Observable<Action> = this.actions$
        .ofType(SONGS_ACTION_TYPES.SONGS_FROM_ALBUM)
        .mergeMap((action: any) => {
            return this.db.list(`/songs/${action.payload.album}`).valueChanges().map((songs: any) => {
                return new SongsOfAlbumUpdatedAction({
                    album: action.payload.album,
                    songs: songs,
                });
            });
        });

    private handleNavigation(segment: string,
        callback: (a: ActivatedRouteSnapshot,
            state: State) => Observable<any>) {
        const nav = this.actions$.ofType(ROUTER_NAVIGATION).
            filter((r: any) => filterAllSegments(r, segment)).
            map(firstSegment);

        return nav.withLatestFrom(this.store).switchMap(a => callback(a[0], a[1])).catch(e => {
            console.log('Network error', e);
            return Observable.of();
        });
    }

    private handleSecondaryNavigation(segment: string,
        callback: (a: ActivatedRouteSnapshot,
            state: State) => Observable<any>) {
        const nav = this.actions$.ofType(ROUTER_NAVIGATION).
            filter((r: any) => filterAllSegments(r, segment)).
            map(secondSegment);

        return nav.withLatestFrom(this.store).switchMap(a => callback(a[0], a[1])).catch(e => {
            console.log('Network error', e);
            return Observable.of();
        });
    }

}
