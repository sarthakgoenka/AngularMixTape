
import * as firebase from 'firebase/app';
import {Injectable} from "@angular/core";
import {Action} from "@ngrx/store";
import { Actions, ofType, Effect } from '@ngrx/effects';
import { of, Observable} from 'rxjs';
import {
  SaveUserAction,
  USER_ACTION_TYPES,
  UserLoginAction,
  UserLoginSuccessAction,
  UserUnauthAction
} from "../../actions/user.action";
import {AngularFireAuth} from "@angular/fire/auth";
import {AngularFireDatabase} from "@angular/fire/database";
import {catchError, filter, map, mergeMap, switchMap, tap} from "rxjs/operators";
import "rxjs-compat/add/observable/fromPromise";
import "rxjs-compat/add/observable/of";


@Injectable()
export class AuthEffects {
  constructor(
    public afAuth: AngularFireAuth, private db: AngularFireDatabase,
    private actions$: Actions) { }


}
