import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesComponent } from './components/games/games.component';
import { PaymentComponent } from './components/payment/payment.component';
import { HistoryComponent } from './components/history/history.component';

const routes: Routes = [
  { path: 'games', component: GamesComponent },
  { path: '', redirectTo: '/games', pathMatch: 'full' },
  { path: 'payment', component: PaymentComponent },
  { path: 'history', component: HistoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
