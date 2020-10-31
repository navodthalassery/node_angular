import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models';
import { AuthenticationService } from '../_services';

import '../_content/app.less';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent implements OnInit {
  admin: boolean;
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    if (this.currentUser) {
      this.admin = (this.currentUser as any)._doc.role == 'Admin' ? true: false;//this.currentUser.role;
    }
  }

  ngOnInit(): void {
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
