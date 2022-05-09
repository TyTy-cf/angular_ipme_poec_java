import { Component, OnInit } from '@angular/core';
import {ChessBoard} from "../../models/chess/chess-board";

@Component({
  selector: 'app-chess-game',
  templateUrl: './chess-game.component.html',
  styleUrls: ['./chess-game.component.scss']
})
export class ChessGameComponent implements OnInit {

  chessBoard: ChessBoard = new ChessBoard();

  ngOnInit(): void {
    console.log(this.chessBoard.tiles);
  }

}
