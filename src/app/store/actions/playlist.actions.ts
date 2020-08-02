import { Playlist } from './../models/playlist.model';
import { State } from './../index';
import { Action } from '@ngrx/store';
import { RouterAction } from '@ngrx/router-store';

export const PLAYLIST_ACTION_TYPES = {
    PLAYLIST_GET_ALL: 'PLAYLIST_GET_ALL',
    PLAYLIST_GET_ALL_OF_USER: 'PLAYLIST_GET_ALL_OF_USER',
    PLAYLIST_ADD: 'PLAYLIST_ADD',
    PLAYLIST_ADDED: 'PLAYLIST_ADDED',
    PLAYLIST_REMOVE: 'PLAYLIST_REMOVE',
    PLAYLIST_ADD_IMAGE: 'PLAYLIST_ADD_IMAGE',
    PLAYLIST_ADDED_IMAGE: 'PLAYLIST_ADDED_IMAGE',
    PLAYLIST_ADD_SONG: 'PLAYLIST_ADD_SONG',
    PLAYLIST_ADDED_SONG: 'PLAYLIST_ADDED_SONG',
    PLAYLIST_GET_SONGS: 'PLAYLIST_GET_SONGS',
    PLAYLIST_ADDED_SONGS: 'PLAYLIST_ADDED_SONGS',
};

// actions
export class PlaylistGetAllAction implements Action {
    type: string = PLAYLIST_ACTION_TYPES.PLAYLIST_GET_ALL;
    constructor(public payload: any) { }
}
export class PlaylistGetAllOfUserAction implements Action {
    type: string = PLAYLIST_ACTION_TYPES.PLAYLIST_GET_ALL_OF_USER;
    constructor(public payload: any) { }
}
export class PlaylistAddAction implements Action {
    type: string = PLAYLIST_ACTION_TYPES.PLAYLIST_ADD;
    constructor(public payload: any) { }
}
export class PlaylistAddImageAction implements Action {
    type: string = PLAYLIST_ACTION_TYPES.PLAYLIST_ADD_IMAGE;
    constructor(public payload: any) { }
}
export class PlaylistAddedImageAction implements Action {
    type: string = PLAYLIST_ACTION_TYPES.PLAYLIST_ADDED_IMAGE;
    constructor(public payload: any) { }
}
export class PlaylistAddedAction implements Action {
    type: string = PLAYLIST_ACTION_TYPES.PLAYLIST_ADDED;
    constructor(public payload: any) { }
}
export class PlaylistRemovedAction implements Action {
    type: string = PLAYLIST_ACTION_TYPES.PLAYLIST_REMOVE;
    constructor(public payload: any) { }
}
export class PlaylistAddSongAction implements Action {
    type: string = PLAYLIST_ACTION_TYPES.PLAYLIST_ADD_SONG;
    constructor(public payload: any) { }
}
export class PlaylistAddedSongAction implements Action {
    type: string = PLAYLIST_ACTION_TYPES.PLAYLIST_ADDED_SONG;
    constructor(public payload: any) { }
}
export class PlaylistGetSongsAction implements Action {
    type: string = PLAYLIST_ACTION_TYPES.PLAYLIST_GET_SONGS;
    constructor(public payload: any) { }
}

export type Actions = RouterAction<State> |
    PlaylistGetAllAction |
    PlaylistGetAllOfUserAction |
    PlaylistAddAction |
    PlaylistAddImageAction |
    PlaylistAddedAction |
    PlaylistRemovedAction |
    PlaylistAddSongAction |
    PlaylistGetSongsAction;
