import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() onToggleTheme = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleTheme() {
    this.onToggleTheme.emit();
  }
}
