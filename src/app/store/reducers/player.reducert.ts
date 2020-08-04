import { Player } from './../models/player.model';
import { PLAYER_ACTION_TYPES, Actions } from './../actions/player.actions';
import { Song } from './../models/song.model';

export const playerInitialState = {
    currentSong: null,
    songs: [],
};

export function playerStoreReducer(state: Player = playerInitialState, action: Actions) {
    switch (action.type) {
        case PLAYER_ACTION_TYPES.PLAYER_ADD_SONG:
            const songsNew = [state.songs, action.payload.song];
            return Object.assign(state, { songs: songsNew });

        case PLAYER_ACTION_TYPES.PLAYER_ADD_SONGS:
            const songs = [...state.songs, ...action.payload.songs];
            return Object.assign(state, { songs: songs });

        case PLAYER_ACTION_TYPES.PLAYER_PLAY_SONG:
            return Object.assign(state, { currentSong: action.payload.song });

        case PLAYER_ACTION_TYPES.PLAYER_REMOVE_SONG:
            const songsUpdated = state.songs.filter(song => {
                return song != action.payload.song;
            });
            return Object.assign(state, { songs: songsUpdated });

        case PLAYER_ACTION_TYPES.PLAYER_REMOVE_ALL_SONGS:
            const songsCleared = [];
            return Object.assign(state, { songs: songsCleared });

        default:
            return state;
    }
}
