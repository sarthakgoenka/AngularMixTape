import { Song } from './song.model';
export interface Player {
    currentSong: Song;
    songs: Song[];
}
