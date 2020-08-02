import { State } from './../index';
import { Action } from '@ngrx/store';
import { RouterAction } from '@ngrx/router-store';

export const SONGS_ACTION_TYPES = {
    SONGS_OF_ALBUM_UPDATED: 'SONGS_OF_ALBUM_UPDATED',
    SONGS_FROM_ALBUM: 'SONGS_FROM_ALBUM',
    SONG_ADD_TO_PLAYLIST: 'SONG_ADD_TO_PLAYLIST',
    SONGS_ADD_TO_PLAYLIST: 'SONGS_ADD_TO_PLAYLIST',
};

// actions
export class SongsOfAlbumUpdatedAction implements Action {
    type: string = SONGS_ACTION_TYPES.SONGS_OF_ALBUM_UPDATED;
    constructor(public payload: any) { }
}
export class SongAddToPlaylistAction implements Action {
    type: string = SONGS_ACTION_TYPES.SONG_ADD_TO_PLAYLIST;
    constructor(public payload: any) { }
}
export class SongsAddToPlaylistAction implements Action {
    type: string = SONGS_ACTION_TYPES.SONGS_ADD_TO_PLAYLIST;
    constructor(public payload: any) { }
}

export type Actions = RouterAction<State> | SongsOfAlbumUpdatedAction | SongAddToPlaylistAction | SongsAddToPlaylistAction;
