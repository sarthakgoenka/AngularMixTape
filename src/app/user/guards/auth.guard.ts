import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { State } from './../../store/index';
import { Store } from '@ngrx/store';

import { AuthService } from './../../shared/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService, private router: Router, private store: Store<State>) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.store.select('user')
            .take(1)
            .map(userState => userState.authenticated)
            .do(authenticated => {
                if (!authenticated) {
                    this.router.navigate(['/']);
                }
            });
    }
}
