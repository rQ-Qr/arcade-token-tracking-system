// This object is a model of transaction history
export interface Transaction {
  // negative number represents purchase
  // positive number represents payment
  token: number;
  description: string
}
