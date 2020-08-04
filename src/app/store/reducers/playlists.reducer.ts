import { Playlist } from './../models/playlist.model';
import { Actions, PLAYLIST_ACTION_TYPES } from './../actions/playlist.actions';

export const playlistsInitialState = [];

export function playlistsStoreReducer(state: Playlist[] = playlistsInitialState, action: Actions) {
    const playlists = [...state];
    switch (action.type) {
        case PLAYLIST_ACTION_TYPES.PLAYLIST_GET_ALL:
            return action.payload.playlists;
        case PLAYLIST_ACTION_TYPES.PLAYLIST_REMOVE:
            delete playlists[action.payload.id];
            return playlists;

        default:
            return state;
    }
}

export const userPlaylistsInitialState = [];

export function userPlaylistsStoreReducer(state: Playlist[] = userPlaylistsInitialState, action: Actions) {
    const playlists = [...state];
    switch (action.type) {
        case PLAYLIST_ACTION_TYPES.PLAYLIST_GET_ALL_OF_USER:
            return action.payload.playlists;
        case PLAYLIST_ACTION_TYPES.PLAYLIST_REMOVE:
            delete playlists[action.payload.id];
            return playlists;

        default:
            return state;
    }
}
