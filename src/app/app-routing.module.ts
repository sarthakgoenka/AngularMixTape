import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArtistsModule} from "./artists/artists.module";


const routes: Routes = [
  { path: '', redirectTo: 'artists', pathMatch: 'full' },
  { path: 'artists', loadChildren: './artists/artists.module#ArtistsModule' },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
