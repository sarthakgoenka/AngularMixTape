import { FILTERS_ACTION_TYPES } from './../actions/filters.actions';
import { Filters } from './../models/filters.model';
import { PlaylistsFilters } from './../models/playlistFilters.model';
import { Actions, ARTISTS_ACTION_TYPES } from './../actions/artists.actions';
import { Artist } from './../models/artist.model';

export const filtersInitialState = { limit: 6 };

export function filtersStoreReducer(state: Filters = filtersInitialState, action: Actions) {
    switch (action.type) {
        case FILTERS_ACTION_TYPES.FILTERS_UPDATED:
            return Object.assign(state, action.payload);

        default:
            return state;
    }
}

export const playListfiltersInitialState = { limit: 9 };

export function playlistFiltersStoreReducer(state: PlaylistsFilters = playListfiltersInitialState, action: Actions) {
    switch (action.type) {
        case FILTERS_ACTION_TYPES.PLAYLIST_FILTERS_UPDATED:
            return Object.assign(state, action.payload);

        default:
            return state;
    }
}
