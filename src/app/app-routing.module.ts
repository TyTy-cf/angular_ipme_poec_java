import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ChessGameComponent} from "./chess-game/chess-game.component";
import {GameIndexComponent} from "./game-index/game-index.component";

const routes: Routes = [
  { path: 'chess', component: ChessGameComponent },
  { path: '', component: ChessGameComponent },
  { path: 'game', component: GameIndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
