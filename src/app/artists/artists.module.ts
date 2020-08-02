import { ArtistsAlbumService } from './services/artists-album.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { SharedModule } from './../shared/shared.module';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { ArtistsAlbumPlayableComponent } from './artists-album-playable/artists-album-playable.component';
import { ArtistCountryFanChartComponent } from './artist-country-fan-chart/artist-country-fan-chart.component';

export const routes = [
  { path: '', component: ArtistListComponent, pathMatch: 'full' },
  { path: ':slug', component: ArtistDetailComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ArtistListComponent,
    ArtistDetailComponent,
    ArtistAlbumListComponent,
    ArtistsAlbumPlayableComponent,
    ArtistCountryFanChartComponent],
  providers: [ArtistsAlbumService]
})
export class ArtistsModule { }
