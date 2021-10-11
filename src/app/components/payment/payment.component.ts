import { Component, OnInit } from '@angular/core';

import {Transaction} from '../../models/transaction';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  // The default number is 1
  tokens = '1';

  constructor(private userService : UserService ) { }

  ngOnInit(): void {
  }

  pay(): void {
    if(this.userService.user) {
      // check the validity of input
      var tokens = this.checkInput(this.tokens);
      if(tokens === 0) {
        alert("Please input valid positive integer!");
        return;
      }
      // update user balance
      this.userService.user.balance = this.userService.user.balance + tokens;
      // update transaction history of user
      var transaction = {
        token: tokens,
        description: "Card Refill"
      };
      // put the transaction at the head of array
      this.userService.user.history.unshift(transaction);
      alert("Payment Successes!");
    }
    else {
      // user is undefined
      alert("Please Login!");
    }
  }
  // check the validity of input
  checkInput(tokens: string): number {
    // transform the string to number/NaN
    var number = Number(this.tokens);
    // if number is valid, return it; else return 0
    if(Number.isInteger(number) && number>0)
      return number;
    else return 0;
  }

}
