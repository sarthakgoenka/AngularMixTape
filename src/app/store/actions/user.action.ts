import { Action } from '@ngrx/store';

export const USER_ACTION_TYPES = {
    AUTH: 'AUTH',
    UNAUTH: 'UNAUTH',
    USER_SAVE: 'USER_SAVE',
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT: 'LOGOUT',
};

// actions
export class UserAction implements Action {
    readonly type: string;
    readonly payload?: any;
}

export class UserLoginAction implements Action {
    type: string = USER_ACTION_TYPES.LOGIN;
    constructor(public payload: any) { }
}

export class UserLoginSuccessAction implements Action {
    type: string = USER_ACTION_TYPES.LOGIN_SUCCESS;
    constructor(public payload: any) { }
}

export class UserAuthAction implements Action {
    type: string = USER_ACTION_TYPES.AUTH;
    constructor(public payload: any) { }
}

export class UserUnauthAction implements Action {
    type: string = USER_ACTION_TYPES.UNAUTH;
    constructor(public payload: any) { }
}

export class SaveUserAction implements Action {
    type: string = USER_ACTION_TYPES.USER_SAVE;
    constructor(public payload: any) { }
}

export class UserLogoutAction implements Action {
    type: string = USER_ACTION_TYPES.LOGOUT;
    constructor(public payload: any) { }
}

export type Actions = UserLoginAction | SaveUserAction | UserAction;
