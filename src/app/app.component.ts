import {Component, OnInit} from '@angular/core';
import {OverlayContainer} from "@angular/cdk/overlay";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Sangeet';
  darkTheme = false;

  constructor(    private overlayContainer: OverlayContainer) {
  }
  ngOnInit(): void {
    if (this.darkTheme) {
      this.overlayContainer.getContainerElement().classList.add('sangeet-dark-theme');
    }
  }
  toggleTheme() {
    this.darkTheme = this.darkTheme ? false : true;
  }

}
