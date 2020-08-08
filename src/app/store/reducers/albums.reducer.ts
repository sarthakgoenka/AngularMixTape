import { Actions, ALBUMS_ACTION_TYPES } from './../actions/albums.actions';

export const albumsInitialState = {};

export function albumsStoreReducer(state: Object = albumsInitialState, action: Actions) {
  switch (action.type) {
    case ALBUMS_ACTION_TYPES.ALBUMS_OF_ARTIST_UPDATED:
      const albums = { ...state };
      console.log(action.payload);
      albums[action.payload.artist] = action.payload.albums;
      return albums;

    default:
      return state;
  }
}
