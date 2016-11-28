import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../navigate.service';
import { StatusService } from '../status.service';

@Component({
  providers: [NavigateService, StatusService],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public notification = false;

  constructor(
    private navigateService: NavigateService,
    private statusService: StatusService) {}

  ngOnInit() {
    if (this.statusService.exists("PRIVATE-KEY") && this.statusService.exists("USER-NAME")) {
      this.navigateService.jump2Target('dispatcher');
    }
  }

  onSubmit(privateKey: string, userName: string) {
    let privateKeyLength = privateKey.length;
    let userNameLength = userName.length;
    if (privateKeyLength !== 0 && userNameLength !== 0) {
      this.statusService.store("PRIVATE-KEY", privateKey);
      this.statusService.store("USER-NAME", userName);
      this.navigateService.jump2Target('dispatcher');
    } else {
      this.notification = true;
    }
  }

  removeClass () {
    this.notification = false;
  }
}
