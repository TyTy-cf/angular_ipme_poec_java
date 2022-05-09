import {Piece} from "./piece";

export class Pawn extends Piece {

  constructor(color: string) {
    super('assets/chess/pawn-' + color + '.png', color);
  }

  move(): void {
    console.log('Pawn : move !');
  }

}
