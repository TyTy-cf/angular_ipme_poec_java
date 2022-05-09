import {Piece} from "./piece";

export class Rook extends Piece {

  constructor(color: string) {
    super('assets/chess/rook-' + color + '.png', color);
  }

  move(): void {
    console.log('Rook : move !');
  }

}
