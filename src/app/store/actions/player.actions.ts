import { State } from './../index';
import { Action } from '@ngrx/store';
import { RouterAction } from '@ngrx/router-store';

export const PLAYER_ACTION_TYPES = {
    PLAYER_ADD_SONG: 'PLAYER_ADD_SONG',
    PLAYER_ADD_SONGS: 'PLAYER_ADD_SONGS',
    PLAYER_PLAY_SONG: 'PLAYER_PLAY_SONG',
    PLAYER_REMOVE_SONG: 'PLAYER_REMOVE_SONG',
    PLAYER_REMOVE_ALL_SONGS: 'PLAYER_REMOVE_ALL_SONGS',
};

// actions
export class PLayerAddSongAction implements Action {
    type: string = PLAYER_ACTION_TYPES.PLAYER_ADD_SONG;
    constructor(public payload: any) { }
}
export class PLayerAddSongsAction implements Action {
    type: string = PLAYER_ACTION_TYPES.PLAYER_ADD_SONGS;
    constructor(public payload: any) { }
}
export class PLayerRemoveSongAction implements Action {
    type: string = PLAYER_ACTION_TYPES.PLAYER_REMOVE_SONG;
    constructor(public payload: any) { }
}
export class PLayerRemoveAllSongsAction implements Action {
    type: string = PLAYER_ACTION_TYPES.PLAYER_REMOVE_ALL_SONGS;
    constructor(public payload: any) { }
}

export type Actions = RouterAction<State> | PLayerAddSongAction | PLayerAddSongsAction | PLayerRemoveSongAction | PLayerRemoveAllSongsAction;
