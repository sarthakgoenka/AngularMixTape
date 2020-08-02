import { Playlist } from './models/playlist.model';
import { ActionReducerMap } from '@ngrx/store';

import { userInitialState } from './reducers/user.reducer';
import { userStoreReducer } from './reducers/user.reducer';
import { User } from './models/user.model';

import { Artist } from './models/artist.model';
import { artistsInitialState, artistsStoreReducer, ArtistStateType } from './reducers/artists.reducer';
import { songsInitialState, songsStoreReducer } from './reducers/songs.reducer';

import {
    filtersInitialState,
    filtersStoreReducer,
    playlistFiltersStoreReducer,
    playListfiltersInitialState
} from './reducers/filters.reducer';
import { Filters } from './models/filters.model';
import { PlaylistsFilters } from './models/playlistFilters.model';

import {
    albumsInitialState,
    albumsStoreReducer
} from './reducers/albums.reducer';

import { Player } from './models/player.model';
import { playerInitialState, playerStoreReducer } from './reducers/player.reducert';

import {
    playlistsInitialState,
    playlistsStoreReducer,
    userPlaylistsStoreReducer,
    userPlaylistsInitialState
} from './reducers/playlists.reducer';

export interface State {
    user: User;
    artists: ArtistStateType;
    filters: Filters;
    albums: Object;
    songs: Object;
    player: Player;
    playlists: Playlist[];
    userPlaylists: Playlist[];
    playlistFilters: PlaylistsFilters;
}

export const initialState: State = {
    user: userInitialState,
    artists: artistsInitialState,
    filters: filtersInitialState,
    albums: albumsInitialState,
    songs: songsInitialState,
    player: playerInitialState,
    playlists: playlistsInitialState,
    userPlaylists: userPlaylistsInitialState,
    playlistFilters: playListfiltersInitialState,
};

export const reducers: ActionReducerMap<State> = {
    user: userStoreReducer,
    artists: artistsStoreReducer,
    filters: filtersStoreReducer,
    albums: albumsStoreReducer,
    songs: songsStoreReducer,
    player: playerStoreReducer,
    playlists: playlistsStoreReducer,
    userPlaylists: userPlaylistsStoreReducer,
    playlistFilters: playlistFiltersStoreReducer,
};
