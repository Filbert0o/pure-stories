import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isNavbarCollapsed = false;

  constructor(
    vcr: ViewContainerRef
  ) {
    // sets the root view to be used with notifications
  }
}
