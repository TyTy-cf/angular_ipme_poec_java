import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChessGameComponent} from "./chess-game/chess-game.component";
import {GameIndexComponent} from "./game-index/game-index.component";
import {AccountIndexComponent} from "./account-index/account-index.component";
import {AccountShowComponent} from "./account-show/account-show.component";
import {DigimonIndexComponent} from "./digimon-index/digimon-index.component";

const routes: Routes = [
  { path: 'chess', component: ChessGameComponent },
  { path: '', component: AccountIndexComponent },
  { path: 'game', component: GameIndexComponent },
  { path: 'account/:id/detail/:name', component: AccountShowComponent },
  { path: 'digidex', component: DigimonIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
