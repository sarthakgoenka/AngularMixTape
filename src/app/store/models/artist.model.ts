import { Genre } from './genre.model';
export interface Artist {
    about: string;
    genre: Genre[];
    image: string;
    name: string;
    slug: string;
}
