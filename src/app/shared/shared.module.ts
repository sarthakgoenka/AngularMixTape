import { PlayableListComponent } from './components/playable-list/playable-list.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';


import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AuthService } from './services/auth.service';
import { PlayerService } from './services/player/player.service';

import { MapToIterable } from './pipes/mapToIterable';

import { CardComponent } from './components/card/card.component';
import { PlayCardComponent } from './../components/play-card/play-card.component';
import { PlayerControllerComponent } from './../components/player-controller/player-controller/player-controller.component';

import { PlaylistService } from './services/playlist/playlist.service';
import { ViewerBoxComponent } from './components/viewer-box/viewer-box.component';
import { WeatherBoxComponent } from './components/weather-box/weather-box.component';
import { IconsButtonsComponent } from './components/icons-buttons/icons-buttons.component';
import { UserBoxComponent } from './components/user-box/user-box.component';
import { IconBoxComponent } from './components/icon-box/icon-box.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import {MatSliderModule} from "@angular/material/slider";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatRadioModule} from "@angular/material/radio";
import {MatInputModule} from "@angular/material/input";

const SHARED_MODULES = [
  CommonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  InfiniteScrollModule,
  RouterModule,
  MatChipsModule,
  MatCardModule,
  MatSliderModule,
  MatDialogModule,
  MatTooltipModule,
  MatRadioModule,
  MatListModule,
  MatMenuModule,
  MatTabsModule,
  MatCheckboxModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
  MatSlideToggleModule,
  NgxChartsModule,
  HttpClientModule,
];

const SHARED_COMPONENTS = [
  CardComponent,
  IconBoxComponent,
  PlayCardComponent,
  PlayerControllerComponent,
  PlayableListComponent,
  ViewerBoxComponent,
  WeatherBoxComponent,
  IconsButtonsComponent,
  UserBoxComponent,
];

const SHARED_PIPES = [
  MapToIterable,
];

@NgModule({
  imports: [
    ...SHARED_MODULES,
  ],
  declarations: [
    ...SHARED_COMPONENTS,
    ...SHARED_PIPES,
  ],
  exports: [
    ...SHARED_MODULES,
    ...SHARED_COMPONENTS,
    ...SHARED_PIPES,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: SharedModule,
      providers: [
        AuthService,
        PlayerService,
        PlaylistService,
      ],
    };
  }
}
