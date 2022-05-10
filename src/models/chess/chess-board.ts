import {Tile} from "./tile";
import {Piece} from "./piece";
import {Pawn} from "./pawn";
import {Knight} from "./knight";
import {Bishop} from "./bishop";
import {Queen} from "./queen";
import {King} from "./king";
import {Rook} from "./Rook";

export class ChessBoard {

  private _tiles: Tile[] = [];
  private _temporaryClickedTile: Tile|undefined;

  constructor() {
    let color: string = 'white';
    for(let y: number = 1; y <= 8; y++) {
      for(let x: number = 1; x <= 8; x++) {
        let piece: Piece|undefined = undefined;
        if (y === 2) {
          piece = new Pawn('black');
        }
        if (y === 7) {
          piece = new Pawn('white');
        }
        if (y === 1) {
          if (x === 1 || x === 8) {
            piece = new Rook('black')
          } else if (x === 2 || x === 7) {
            piece = new Knight('black');
          } else if (x === 3 || x === 6) {
            piece = new Bishop('black');
          } else if (x === 4) {
            piece = new Queen('black');
          } else if (x === 5) {
            piece = new King('black');
          }
        } else if (y === 8) {
          if (x === 1 || x === 8) {
            piece = new Rook('white')
          } else if (x === 2 || x === 7) {
            piece = new Knight('white');
          } else if (x === 3 || x === 6) {
            piece = new Bishop('white');
          } else if (x === 4) {
            piece = new Queen('white');
          } else if (x === 5) {
            piece = new King('white');
          }
        }
        // if (piece !== undefined) {
        //   piece.color = 'white'; // set
        //   console.log(piece.color); // get
        // }
        this._tiles.push(new Tile(y, x, color, piece));
        if (x !== 8) {
          if (color === 'white') {
            color = 'black';
          } else {
            color = 'white';
          }
        }
      }
    }
  }

  get tiles(): Tile[] {
    return this._tiles;
  }

  move(tile: Tile): void {
    if (tile.piece && this._temporaryClickedTile === undefined) {
      this._temporaryClickedTile = tile;
      tile.isSelected = !tile.isSelected;
      console.log(this._temporaryClickedTile);
    } else {
      if (tile === this._temporaryClickedTile) {
        this._temporaryClickedTile = undefined;
        tile.isSelected = !tile.isSelected;
      }
    }
    if (this._temporaryClickedTile &&
      (
        !tile.piece
        ||
        tile.piece.color !== this._temporaryClickedTile.piece?.color
      )
    ) {
      tile.piece = this._temporaryClickedTile.piece;
      this._temporaryClickedTile.isSelected = !this._temporaryClickedTile.isSelected;
      this._temporaryClickedTile.piece = undefined;
      this._temporaryClickedTile = undefined;
    }
  }
}
