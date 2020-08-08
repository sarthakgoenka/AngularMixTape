import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatSliderModule} from "@angular/material/slider";
import {StoreModule} from "@ngrx/store";
import {initialState, reducers} from "./store/index";
import {AngularFireModule} from "@angular/fire";
import {environment, staticData} from "../environments/environment";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {AngularFireAuthModule} from "@angular/fire/auth";
import {UserModule} from "./user/user.module";
import {EffectsModule} from "@ngrx/effects";
import {AuthEffects} from "./store/effects/firebase/user.effects";
import {SharedModule} from "./shared/shared.module";
import {ArtistsEffects} from "./store/effects/firebase/artists.effects";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSliderModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule,
    EffectsModule.forRoot([AuthEffects,
      ArtistsEffects
    ]),
    StoreModule.forRoot(reducers),
    UserModule,
    SharedModule.forRoot(),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
