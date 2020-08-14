import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArtistsModule} from "./artists/artists.module";
import {PlaylistModule} from "./playlist/playlist.module";
import {QueueModule} from "./queue/queue.module";



const routes: Routes = [
  { path: '', redirectTo: 'artists', pathMatch: 'full' },
  { path: 'artists', loadChildren: './artists/artists.module#ArtistsModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'playlists', loadChildren: './playlist/playlist.module#PlaylistModule' },
  { path: 'queue', loadChildren: './queue/queue.module#QueueModule' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
