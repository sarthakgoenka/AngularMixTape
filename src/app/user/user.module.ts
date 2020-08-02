import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UnAuthGuard } from './guards/unauth.guard';

export const routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [UnAuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [LoginComponent],
  providers: [
    AuthGuard,
    UnAuthGuard,
  ]
})
export class UserModule { }
