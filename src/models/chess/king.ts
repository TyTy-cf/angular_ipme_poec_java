import {Piece} from "./piece";

export class King extends Piece {

  constructor(color: string) {
    super('assets/chess/king-' + color + '.png', color);
  }

  move(): void {
    console.log('King : move !');
  }

}
