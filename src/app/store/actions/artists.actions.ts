import { State } from './../index';
import { Action } from '@ngrx/store';
import { RouterAction } from '@ngrx/router-store';

import { Filters } from './../models/filters.model';

export const ARTISTS_ACTION_TYPES = {
    ARTISTS_UPDATED: 'ARTISTS_UPDATED',
    ARTIST_UPDATED: 'ARTIST_UPDATED',
};

// actions
export class ArtistsUpdatedAction implements Action {
    type: string;
    payload?: any;
    filters: Filters;
}

export type Actions = RouterAction<State> | ArtistsUpdatedAction;
