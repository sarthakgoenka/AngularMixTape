import {HttpClient} from "@angular/common/http";
import {Action, Store} from "@ngrx/store";
import {State} from "../../index";
import {Actions, Effect, ofType} from "@ngrx/effects";
import {ActivatedRouteSnapshot} from "@angular/router";
import {Observable, of} from "rxjs";
import {ROUTER_NAVIGATION} from "@ngrx/router-store";
import {catchError, filter, map, mergeMap, switchMap, tap, withLatestFrom} from "rxjs/operators";

import { secondSegment, filterAllSegments, firstSegment, createFilters } from '../helpers';
import {Injectable} from "@angular/core";
import {ARTISTS_ACTION_TYPES} from "../../actions/artists.action";
import {Artist} from "../../models/artist.model";
import {ALBUMS_ACTION_TYPES, AlbumsOfArtistUpdatedAction} from "../../actions/albums.actions";
import {Album} from "../../models/album.model";
import {SONGS_ACTION_TYPES, SongsOfAlbumUpdatedAction} from "../../actions/songs.actions";

@Injectable()
export class ArtistsEffects {
  data: any;
  albums : any
  songs : any
  constructor(private http:HttpClient,
              private store: Store<State>,
              private actions$:Actions) {
    this.data = this.http.get('assets/data/database.json');
    this.albums = this.http.get('assets/data/albums.json');
    this.songs = this.http.get('assets/data/songs.json');
  }


  @Effect() navigateToArtists = this.handleNavigation('artists',
      (routerSnapshot: ActivatedRouteSnapshot) => {
        const filters = createFilters(routerSnapshot.params);
        return this.data.map((data: any) => {
          const artists = Object.keys(data.artists).map((k) => data.artists[k]);
          const list = artists.map(artist => artist.slug);
         const items = { ...artists.map(artist => ({ [artist.slug]: artist }))}
          // Object.assign(items, );
          return { type: ARTISTS_ACTION_TYPES.ARTISTS_UPDATED, payload: { items: items, list: list } };
        });
      });

  @Effect() navigateToArtistDetail = this.handleSecondaryNavigation('artists/:slug',
      (routerSnapshot: ActivatedRouteSnapshot, state: State) => {
        // console.log(routerSnapshot.params.slug);
        // const slug = routerSnapshot.paramMap.get('slug');
        const slug = routerSnapshot.params.slug;
        return this.data.map((data, index) => {
          // console.log(data.albums[slug])
          const artist: Artist = data.artists[slug];
          // console.log(artist);
          return { type: ARTISTS_ACTION_TYPES.ARTIST_UPDATED, payload: artist };
        });
      });

  @Effect() navigateToArtistDetailGetAlbums = this.handleSecondaryNavigation('artists/:slug',
    (routerSnapshot: ActivatedRouteSnapshot, state: State) => {
      const slug = routerSnapshot.params.slug;
      return this.albums.map((album) => {
        const albums = album[slug];
        return new AlbumsOfArtistUpdatedAction({
          artist: slug,
          albums: albums,
        });
      });
    });

  @Effect() albumGetSongs$: Observable<any> = this.actions$.pipe(
    ofType(SONGS_ACTION_TYPES.SONGS_FROM_ALBUM),
    mergeMap((action:any)=>{
      return this.songs.map((songs) => {
        const song = songs[action.payload.album];
        return new SongsOfAlbumUpdatedAction({
          album: action.payload.album,
          songs: song,
        })
      })
    }
  ));



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

