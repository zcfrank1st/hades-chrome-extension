import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigateService {

  constructor(private router: Router) { }

  public jump2Target(target: String) {
    this.router.navigate(['/' + target]);
  }
}
