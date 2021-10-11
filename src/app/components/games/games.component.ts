import { Component, OnInit } from '@angular/core';

import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})

export class GamesComponent implements OnInit {
  // This is a game lists
  games: Game[] = [];

  constructor(private gameService: GameService, private userService: UserService) { }

  ngOnInit() {
    // loading game lists
    this.getGames();
  }

  getGames(): void {
    // assigning data to games
    this.gameService.getGames()
    .subscribe(games => this.games = games);
  }

  buyGame(game: Game) {
    if(this.userService.user) {
      // check if user bought this game before
      if(this.userService.user.games.indexOf(game.id) !== -1) {
        alert("Duplicated Purchase!");
        return;
      }

      var balance = this.userService.user.balance;
      // check user balance
      if(balance >= game.price) {
        // update user balance
        this.userService.user.balance = balance - game.price;
        // add this game to games array
        this.userService.user.games.push(game.id);
        // update transaction history of user
        var transaction = {
          // for purchasing games, token is negative
          token: -game.price,
          description: game.name
        };
        // put the transaction at the head of array
        this.userService.user.history.unshift(transaction);
        alert("Transaction Successes!");
      }
      else {
        alert("Insufficient Balance!");
      }
    }
    // user is undefined
    else {
      alert("Please Login!");
    }
  }

}
