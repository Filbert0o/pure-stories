import {Component, OnDestroy} from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnDestroy {
  constructor(public auth: AuthService) {}

  ngOnDestroy(): void {}
}
