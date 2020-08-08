import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {User} from "../../store/models/user.model";
import {Store} from "@ngrx/store";
import {State} from "../../store";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  user: User;

  @Output() onLogout = new EventEmitter();
  @Output() oncreatePlaylist = new EventEmitter();
  @Output() onToggleSidenav = new EventEmitter();
  @Output() onToggleTheme = new EventEmitter();

  constructor(  private store: Store<State>,) { }
  ngOnInit() {
    this.store.select('user').subscribe(user=>{
      console.log(user);
      this.user = user;
    })
  }

  logout() {
    this.onLogout.emit();
  }

  createPlaylist() {
    this.oncreatePlaylist.emit();
  }

  toggleSidenav() {
    this.onToggleSidenav.emit();
  }

  toggleTheme() {
    this.onToggleTheme.emit();
  }
}
