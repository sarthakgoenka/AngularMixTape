import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { UserLoginAction, SaveUserAction, UserUnauthAction, UserAuthAction, UserLoginSuccessAction } from './../../actions/user.action';
import { USER_ACTION_TYPES } from './../../actions/user.action';

@Injectable()
export class AuthStaticEffects {
    constructor(
        private actions$: Actions) { }
}
