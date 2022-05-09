import {Piece} from "./piece";

export class Queen extends Piece {

  constructor(color: string) {
    super('assets/chess/queen-' + color + '.png', color);
  }

  move(): void {
    console.log('Queen : move !');
  }

}
