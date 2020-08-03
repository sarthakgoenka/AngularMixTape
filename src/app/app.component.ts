import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {OverlayContainer} from "@angular/cdk/overlay";
import {MatSidenav} from "@angular/material/sidenav";
import {isPlatformBrowser} from "@angular/common";
import {NavigationEnd, Router} from '@angular/router';
import {Store} from "@ngrx/store";
import {State} from "./store/index";
import {AuthService} from "./shared/services/auth.service";
import {Observable} from "rxjs";
import {User} from "./store/models/user.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'MIX TAPE';
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
    this.store.select('user').subscribe(user=>{
      console.log("adfasf")
      console.log(user);
    })
    this.user = this.store.select('user');
    if (this.darkTheme) {
      this.overlayContainer.getContainerElement().classList.add('sangeet-dark-theme');
    }
  }

  createPlaylist(): void {

  }

  updateSidenavForWindow() {
    if (this.isMobile()) {
      this.navMode = 'over';
      this.sidenav.close();
    } else {
      this.sidenav.open();
      this.playerCollapsed = false;
    }
  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (this.isMobile()) {
      // this.navMode = 'over';
    }
    else {
      // this.navMode = 'side';
      this.playerCollapsed = false;
    }
  }

  logout() {
    this.auth.signOut();
  }

  toggleSidenav() {
    this.sidenav.toggle();
  }

  playerCollapseToggle(collapsed) {
    this.playerCollapsed = collapsed;
  }

  toggleTheme() {
    this.darkTheme = this.darkTheme ? false : true;
  }
}
