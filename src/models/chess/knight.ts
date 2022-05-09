import {Piece} from "./piece";

export class Knight extends Piece {

  constructor(color: string) {
    super('assets/chess/knight-' + color + '.png', color);
  }

  move(): void {
    console.log('Knight : move !');
  }

}
