import { Component } from '@angular/core';
import {ChessBoard} from "../../models/chess/chess-board";

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.scss']
})
export class ChessGameComponent {

  chessBoard: ChessBoard = new ChessBoard();

  constructor() {
    console.log(this.chessBoard);
  }

}
