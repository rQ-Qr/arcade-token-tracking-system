import { Component, OnInit} from '@angular/core';

import {User} from '../../models/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // project title
  title = 'Arcade Token Tracking System';

  constructor(public userService: UserService) { }

  ngOnInit() {}

  login() {
    this.userService.login();
  }

  logout() {
    this.userService.logout();
  }

}
