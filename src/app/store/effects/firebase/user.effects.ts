import { Injectable } from '@angular/core';

import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { UserLoginAction, SaveUserAction, UserUnauthAction, UserAuthAction, UserLoginSuccessAction } from './../../actions/user.action';
import { USER_ACTION_TYPES } from './../../actions/user.action';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import * as firebase from 'firebase/app';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFireDatabase} from "@angular/fire/database";

@Injectable()
export class AuthEffects {
    constructor(
        public afAuth: AngularFireAuth, private db: AngularFireDatabase,
        private actions$: Actions) { }

    @Effect() login$: Observable<Action> = this.actions$
        .ofType(USER_ACTION_TYPES.LOGIN)
        .map((action: UserLoginAction) => action.payload)
        .switchMap((payload) => {
            // Transform firebase auth to an observable.
            return Observable.fromPromise(this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()))
                .map(user => new SaveUserAction(user))
                .catch(res => Observable.of(new UserUnauthAction({})));
        });

    @Effect() saveUser$: Observable<Action> = this.actions$
        .ofType(USER_ACTION_TYPES.USER_SAVE)
        .map((action: SaveUserAction) => action.payload)
        .mergeMap((response) => {
            return this.db.object(`/users/${response.user.uid}`).valueChanges()
                .switchMap((user) => {
                    if (!user) {
                        const { displayName, email, emailVerified, photoURL, uid } = response.user;
                        this.db.object(`/users/${response.user.uid}`).set({
                            displayName,
                            email,
                            emailVerified,
                            photoURL,
                            uid
                        });
                    }
                    return Observable.of(new UserLoginSuccessAction({
                        uid: response.user.uid,
                    }));
                }).catch(res => {
                    return Observable.of(new UserUnauthAction({}));
                });
        });

    @Effect() logout$: Observable<Action> = this.actions$
        .ofType(USER_ACTION_TYPES.LOGOUT)
        .map((action: UserLoginAction) => action.payload)
        .switchMap((payload) => {
            return Observable.fromPromise(this.afAuth.auth.signOut())
                .map(user => new UserUnauthAction({}));
            // .catch(res => Observable.of({}));
        });
}
