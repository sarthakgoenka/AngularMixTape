import { Album } from './../models/album.model';
import { State } from './../index';
import { Action } from '@ngrx/store';
import { RouterAction } from '@ngrx/router-store';

export const ALBUMS_ACTION_TYPES = {
    ALBUMS_OF_ARTIST_UPDATED: 'ALBUMS_OF_ARTIST_UPDATED',
};

// actions
export class AlbumsOfArtistUpdatedAction implements Action {
    type: string = ALBUMS_ACTION_TYPES.ALBUMS_OF_ARTIST_UPDATED;
    constructor(public payload: any) { }
}

export type Actions = RouterAction<State> | AlbumsOfArtistUpdatedAction;
