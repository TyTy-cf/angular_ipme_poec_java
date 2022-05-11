import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChessGameComponent} from "./chess-game/chess-game.component";
import {GameIndexComponent} from "./game-index/game-index.component";
import {AccountIndexComponent} from "./account-index/account-index.component";

const routes: Routes = [
  { path: 'chess', component: ChessGameComponent },
  { path: '', component: AccountIndexComponent },
  { path: 'game', component: GameIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
