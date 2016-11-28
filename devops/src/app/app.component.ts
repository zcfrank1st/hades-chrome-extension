import './rxjs-operators';
import { Component } from '@angular/core';
import { StatusService } from './status.service';
import { NavigateService } from './navigate.service';


@Component({
  providers: [NavigateService, StatusService],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (
    private statusService: StatusService,
    private navigateService: NavigateService) {}

  clearMeta() {
    this.statusService.clear("PRIVATE-KEY");
    this.statusService.clear("USER-NAME");
    this.navigateService.jump2Target("login");
  }
}