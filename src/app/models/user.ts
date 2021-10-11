import { Transaction } from './transaction';
// This object is a model of user
export interface User {
  id: number;
  name: string;
  balance: number;
  games: number[];
  history: Transaction[];
}
