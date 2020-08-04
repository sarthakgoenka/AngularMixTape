import { Actions, SONGS_ACTION_TYPES } from './../actions/songs.actions';

export const songsInitialState = {};

export function songsStoreReducer(state: Object = songsInitialState, action: Actions) {
    const songs = { ...state };
    switch (action.type) {
        case SONGS_ACTION_TYPES.SONGS_OF_ALBUM_UPDATED:
            songs[action.payload.album] = action.payload.songs;
            return songs;
        case SONGS_ACTION_TYPES.SONGS_ADD_TO_PLAYLIST:
            songs[action.payload.playlistId] = action.payload.songs;
            return songs;
        case SONGS_ACTION_TYPES.SONG_ADD_TO_PLAYLIST:
            let fullPlaylist;
            if (songs[action.payload.playlist]) {
                const key = Object.keys(songs[action.payload.playlist]).length;
                fullPlaylist = Object.assign(songs[action.payload.playlist], { [key]: action.payload.song });
            } else {
                fullPlaylist = songs[action.payload.playlist] = { 0: action.payload.song };
            }
            return Object.assign(songs, { [action.payload.playlist]: fullPlaylist });

        default:
            return state;
    }
}
