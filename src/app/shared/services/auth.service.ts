import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFireDatabase} from "@angular/fire/database";
import {Store} from "@ngrx/store";
import {State} from "../../store/index";
import {Router} from "@angular/router";
import {
  UserAuthAction,
  UserLoginAction,
  UserLoginSuccessAction,
  UserLogoutAction
} from "../../store/actions/user.action";
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: firebase.User;

  constructor(public afAuth: AngularFireAuth,
              private db: AngularFireDatabase,
              public store: Store<State>,
              private router: Router) {

    afAuth.authState.subscribe((user) => {
      this.setUser(user);
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
