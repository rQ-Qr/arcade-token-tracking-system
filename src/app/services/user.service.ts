import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {User} from '../models/user'
import {USER} from '../models/mock-user'
// creates a single, shared instance of UserService
@Injectable({
  providedIn: 'root'
})

export class UserService {
  // defining a user variable used in the whole app
  user?: User;

  constructor() { }
  // introducing Observable for the extension of HttpClient.get() in the future
  getUser(): Observable<User> {
    // For now, there is only one mock user.
    return of(USER);
  }

  login() {
    // assigning to the user once data reach
    this.getUser().subscribe(user => this.user = user);
  }

  logout() {
    this.user = undefined;
  }

}
