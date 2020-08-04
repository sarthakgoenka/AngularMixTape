import { Action } from '@ngrx/store';

import { Filters } from './../models/filters.model';
import { PlaylistsFilters } from './../models/playlistFilters.model';

export const FILTERS_ACTION_TYPES = {
    FILTERS_UPDATED: 'FILTERS_UPDATED',
    PLAYLIST_FILTERS_UPDATED: 'PLAYLIST_FILTERS_UPDATED',
};

// actions
export class FiltersSaveAction implements Action {
    readonly type: string;
    readonly payload?: Filters;
}
export class PlaylistFiltersSaveAction implements Action {
    readonly type: string;
    readonly payload?: PlaylistsFilters;
}

export type Actions = FiltersSaveAction | PlaylistFiltersSaveAction;
