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

import * as firebase from 'firebase/app';
import 'firebase/storage';

import {
    PLAYLIST_ACTION_TYPES,
    PlaylistAddAction,
    PlaylistAddedAction,
    PlaylistAddedImageAction,
    PlaylistAddImageAction,
    PlaylistGetAllOfUserAction,
    PlaylistAddSongAction,
    PlaylistGetSongsAction,
    PlaylistGetAllAction
} from './../../actions/playlist.actions';
import { secondSegment, filterAllSegments, firstSegment, createFilters } from '../helpers';
import {AngularFireDatabase} from "@angular/fire/database";
import {FirebaseApp} from "@angular/fire";
import {switchMap} from "rxjs/operators";

@Injectable()
export class PlaylistEffects {
    constructor(
        private db: AngularFireDatabase,
        private firebaseApp: FirebaseApp,
        private store: Store<State>,
        private actions$: Actions) { }

    @Effect() navigateToPlaylists = this.handleNavigation('playlists/explore', (routerSnapshot: ActivatedRouteSnapshot) => {
        const filters = createFilters(routerSnapshot.params);
        return this.db.list('/playlists', ref => ref.limitToFirst(filters.limit)).valueChanges()
            .map((playlists: any[]) => {
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

    @Effect() addPlaylist$: Observable<Action> = this.actions$.pipe(
        ,ofType(PLAYLIST_ACTION_TYPES.PLAYLIST_ADD)
        ,map((action: PlaylistAddAction) => action.payload)
        ,switchMap((payload) => {
            const ref = this.db.list(`/playlists/${payload.uid}`).push({
                name: payload.name,
                owner: payload.owner,
            }))

            return Observable.of(new PlaylistAddImageAction({
                uid: payload.uid,
                playlistKey: ref.key,
                name: payload.name,
                imageFile: payload.imageFile,
            }));
        })
)
    /*.catch(res => {
        // Handle error with an action that removes the added playlist from store.
        return Observable.of({});
        //return Observable.of(new PlaylistRemovedAction({
        //   id: res.key,
        // }));
    });*/

    @Effect() addPlaylistImage$: Observable<Action> = this.actions$
        .ofType(PLAYLIST_ACTION_TYPES.PLAYLIST_ADD_IMAGE)
        .map((action: PlaylistAddImageAction) => action.payload)
        .switchMap((payload) => {
            const storageRef = this.firebaseApp.storage().ref();
            const selectedFile = payload.imageFile;
            // Make local copies of services because "this" will be clobbered
            const folder = 'playlists';
            const path = `/${folder}/${selectedFile.name}`;
            const iRef = storageRef.child(path);
            return Observable.fromPromise(iRef.put(selectedFile)).switchMap(item => {
                const ref = this.db.list(`/playlists/${payload.uid}`).update(payload.playlistKey, {
                    image: item.downloadURL,
                });

                return Observable.of(new PlaylistAddedAction({}));
            });

        });
    /*.catch(res => {
        // Handle error with an action that removes the added playlist from store.
        return Observable.of({});
    })*/

    @Effect() getAllPlaylistsForUser$: Observable<Action> = this.actions$
        .ofType(USER_ACTION_TYPES.LOGIN_SUCCESS)
        .map((action: PlaylistAddImageAction) => action.payload)
        .switchMap((payload) => {
            // Get all playlists.
            const uid = payload.uid;
            return this.db.list(`/playlists/${uid}`).snapshotChanges().map(action => {
                return action.map(ac => {
                    const $key = ac.payload.key;
                    const data = { $key, ...ac.payload.val() };
                    return data;
                });
            }).map((playlists: Playlist[]) => {
                return new PlaylistGetAllOfUserAction({
                    playlists: playlists.map((playlist: any): Playlist => {
                        return Object.assign(playlist, { id: playlist.$key });
                    }),
                });
            });
        });
    /*.catch(res => {
        // Handle error with an action that removes the added playlist from store.
        return Observable.of({});
    });*/

    @Effect() addSongToPlaylist$: Observable<Action> = this.actions$
        .ofType(PLAYLIST_ACTION_TYPES.PLAYLIST_ADD_SONG)
        .map((action: PlaylistAddSongAction) => action.payload)
        .switchMap((payload) => {
            const ref = this.db.list(`/songs/${payload.playlist}`).push({ ...payload.song });

            return Observable.of(new SongAddToPlaylistAction({
                playlist: payload.playlist,
                song: payload.song,
            }));
        });
    /*.catch(res => {
        // Handle error with an action that removes the added playlist from store.
        return Observable.of({});
        //return Observable.of(new PlaylistRemovedAction({
        //    id: res.key,
        // }));
    });*/

    @Effect() getAllPlaylistSongs$: Observable<Action> = this.actions$
        .ofType(PLAYLIST_ACTION_TYPES.PLAYLIST_GET_SONGS)
        .map((action: PlaylistGetSongsAction) => action.payload)
        .switchMap((payload) => {
            // Get all playlists.
            const uid = payload.uid;
            const id = payload.id;
            return this.db.list(`/songs/${id}`).valueChanges().map((songs: Song[]) => {
                return new SongsAddToPlaylistAction({
                    playlistId: id,
                    songs: songs,
                });
            });
        });
    /*.catch(res => {
        // Handle error with an action that removes the added playlist from store.
        return Observable.of({});
    });*/

    private handleNavigation(segment: string, callback: (a: ActivatedRouteSnapshot, state: State) => Observable<any>) {
        const nav = this.actions$.ofType(ROUTER_NAVIGATION).
            filter((r: any) => filterAllSegments(r, segment)).
            map(firstSegment);

        return nav.withLatestFrom(this.store).switchMap(a => callback(a[0], a[1])).catch(e => {
            console.log('Network error', e);
            return Observable.of();
        });
    }

    private handleSecondaryNavigation(segment: string, callback: (a: ActivatedRouteSnapshot, state: State) => Observable<any>) {
        const nav = this.actions$.ofType(ROUTER_NAVIGATION).
            filter((r: any) => filterAllSegments(r, segment)).
            map(secondSegment);

        return nav.withLatestFrom(this.store).switchMap(a => callback(a[0], a[1])).catch(e => {
            console.log('Network error', e);
            return Observable.of();
        });
    }
}
