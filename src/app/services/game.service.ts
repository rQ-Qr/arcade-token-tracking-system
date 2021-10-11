import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Game } from '../models/game';
import { GAMES } from '../models/mock-games';
// creates a single, shared instance of GameService
@Injectable({
  providedIn: 'root'
})

export class GameService {
  constructor() { }
  // loading game lists
  // introducing Observable for the extension of HttpClient.get() in the future
  getGames(): Observable<Game[]> {
    return of(GAMES);
  }

}
