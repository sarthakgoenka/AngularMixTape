import { Router } from '@angular/router';
import { UserLoginAction, UserLogoutAction, UserAuthAction, UserLoginSuccessAction } from './../../store/actions/user.action';

import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Store } from '@ngrx/store';

import { State } from './../../store/index';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFireDatabase} from "@angular/fire/database";

@Injectable()
export class AuthService {

  private _user: firebase.User;

  constructor(public afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    public store: Store<State>,
    private router: Router) {
    afAuth.authState.subscribe((user) => {
      this.setUser(user);
      console.log(user)
    });
  }

  setUser(user) {
    if (user !== null) {
      this.store.dispatch(new UserAuthAction({
        username: user.displayName,
        user_image: user.photoURL,
        uid: user.uid,
      }));
      this.store.dispatch(new UserLoginSuccessAction({
        uid: user.uid,
      }));
      this.router.navigate(['/']);
    } else {
      this.store.dispatch(new UserLogoutAction({}));
    }
  }

  signInWithGoogle(): void {
    this.store.dispatch(new UserLoginAction({}));
  }

  signOut(): void {
    this.store.dispatch(new UserLogoutAction({}));
  }
}
