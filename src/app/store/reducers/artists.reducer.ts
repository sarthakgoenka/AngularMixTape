import { Actions, ARTISTS_ACTION_TYPES } from './../actions/artists.actions';
import { Artist } from './../models/artist.model';

export interface ArtistStateType {
    items: Object;
    list: string[];
}

export const artistsInitialState = {
    items: {},
    list: [],
};

export function artistsStoreReducer(state: ArtistStateType = artistsInitialState, action: Actions) {
    switch (action.type) {
        case ARTISTS_ACTION_TYPES.ARTISTS_UPDATED:
            return { ...state, items: action.payload.items, list: action.payload.list };

        case ARTISTS_ACTION_TYPES.ARTIST_UPDATED:
            const artists = { ...state };
            artists.items[action.payload.slug] = action.payload;
            // artists.list = [...artists.list, action.payload.slug];
            return { ...artists };

        default:
            return state;
    }
}
