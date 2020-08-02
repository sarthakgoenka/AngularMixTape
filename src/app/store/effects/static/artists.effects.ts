import { HttpClient } from '@angular/common/http';
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
import 'rxjs/add/operator/map';

import { State } from './../../index';
import { Filters } from './../../models/filters.model';
import { secondSegment, filterAllSegments, firstSegment, createFilters } from '../helpers';

@Injectable()
export class ArtistsStaticEffects {
    data: any;
    constructor(
        private http: HttpClient,
        private store: Store<State>,
        private actions$: Actions) {
        this.data = this.http.get('assets/data/database.json');
    }

    @Effect() navigateToArtists = this.handleNavigation('artists',
        (routerSnapshot: ActivatedRouteSnapshot) => {
            const filters = createFilters(routerSnapshot.params);
            return this.data.map((data: any) => {
                const artists = Object.keys(data.artists).map((k) => data.artists[k]);
                const list = artists.map(artist => artist.slug);
                const items = {};
                Object.assign(items, ...artists.map(artist => ({ [artist.slug]: artist })));
                return { type: ARTISTS_ACTION_TYPES.ARTISTS_UPDATED, payload: { items: items, list: list } };
            });
        });

    @Effect() navigateToArtistDetail = this.handleSecondaryNavigation('artists/:slug',
        (routerSnapshot: ActivatedRouteSnapshot, state: State) => {
            const slug = routerSnapshot.paramMap.get('slug');
            return this.data.map((data: any) => {
                const artist: Artist = data.artists[slug];
                return { type: ARTISTS_ACTION_TYPES.ARTIST_UPDATED, payload: artist };
            });
        });

    @Effect() navigateToArtistDetailGetAlbums = this.handleSecondaryNavigation('artists/:slug',
        (routerSnapshot: ActivatedRouteSnapshot, state: State) => {
            const slug = routerSnapshot.paramMap.get('slug');
            return this.data.map((data: any) => {
                const albums: Album[] = Object.keys(data.albums[slug]).map((k) => data.albums[slug][k]);
                return new AlbumsOfArtistUpdatedAction({
                    artist: slug,
                    albums: albums,
                });
            });
        });

    @Effect() albumGetSongs$: Observable<Action> = this.actions$
        .ofType(SONGS_ACTION_TYPES.SONGS_FROM_ALBUM)
        .mergeMap((action: any) => {
            return this.data.map((data: any) => {
                const songs = data.songs[action.payload.album];
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
