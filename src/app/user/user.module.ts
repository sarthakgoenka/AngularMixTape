import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { UnAuthGuard } from './guards/unauth.guard';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

export const routes = [
  { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [UnAuthGuard] },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatCardModule,
    MatButtonModule,
  ],
  declarations: [LoginComponent],
  providers: [
    AuthGuard,
    UnAuthGuard,
  ]
})
export class UserModule { }
