import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistListComponent } from './playlist-list/playlist-list.component';
import { PlaylistDetailComponent } from './playlist-detail/playlist-detail.component';
import { PlaylistSongsPlayableComponent } from './playlist-songs-playable/playlist-songs-playable.component';
import { PlaylistMeComponent } from './playlist-me/playlist-me.component';

export const routes = [
  { path: '', redirectTo: 'explore', },
  { path: 'explore', component: PlaylistListComponent, },
  { path: 'detail/:id', component: PlaylistDetailComponent, },
  { path: 'me', component: PlaylistMeComponent },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [PlaylistListComponent, PlaylistDetailComponent, PlaylistSongsPlayableComponent, PlaylistMeComponent]
})
export class PlaylistModule { }
