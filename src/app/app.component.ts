import { Router } from '@angular/router';
import { PlaylistService } from './shared/services/playlist/playlist.service';
import { Component, ViewChild, HostListener, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { OverlayContainer } from '@angular/cdk/overlay';

import { Store } from '@ngrx/store';
import { State } from './store/index';
import { User } from './store/models/user.model';

import { AuthService } from './shared/services/auth.service';

import { PlaylistCreateComponent } from './components/playlist-create/playlist-create.component';
import { NavigationEnd } from '@angular/router';
import {MatSidenav} from "@angular/material/sidenav";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Zondimo';
  @ViewChild('sidenav') sidenav: MatSidenav;
  navMode = 'side';

  playerCollapsed = true;

  darkTheme = false;

  user: Observable<User>;

  singlePage = false;

  singlePages = [
    '/user/login'
  ];

  constructor(private auth: AuthService,
    private store: Store<State>,
    public dialog: MatDialog,
    private playListService: PlaylistService,
    private overlayContainer: OverlayContainer,
    private router: Router
  ) {

  }

  isMobile() {
    return isPlatformBrowser && (window.innerWidth < 768);
  }

  ngOnInit() {
    this.updateSidenavForWindow();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (!this.isMobile()) {
          this.singlePages.includes(event.url) ? this.singlePage = true : this.singlePage = false;
          this.singlePage ? this.sidenav.close() : this.sidenav.open();
        }
      }
    });
    this.user = this.store.select('user');
    if (this.darkTheme) {
      this.overlayContainer.getContainerElement().classList.add('zondimo-dark-theme');
    }
  }

  createPlaylist(): void {
    const dialogRef = this.dialog.open(PlaylistCreateComponent, {
      width: '350px',
      data: {
        name: 'My playlist name',
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.playListService.createPlaylist(result.name, result.file);
      }
    });
  }

  /**
   * Update the sidenav property for the current window.
   */
  updateSidenavForWindow() {
    if (this.isMobile()) {
      this.navMode = 'over';
      this.sidenav.close();
    } else {
      this.sidenav.open();
      this.playerCollapsed = false;
    }
  }

  /**
   * Listen to window resize.
   */
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.isMobile()) {
      this.navMode = 'over';
    }
    else {
      this.navMode = 'side';
      this.playerCollapsed = false;
    }
  }

  logout() {
    this.auth.signOut();
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  /**
   * Player collapsed event callback
   *
   * @param collapsed
   *  Info on if the player is collapsed.
   */
  playerCollapseToggle(collapsed) {
    this.playerCollapsed = collapsed;
  }

  /**
   * Toggle the theme from dark to light.
   */
  toggleTheme() {
    this.darkTheme = this.darkTheme ? false : true;
  }
}
