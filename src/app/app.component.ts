import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'VehicleOverviewApp';
  isSignIn: Boolean = false;
  constructor (public router:Router) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isSignIn = event.url.includes('/sign-in') || event.url === '/';
      }
    });
  }
}
