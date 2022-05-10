import {Piece} from "./piece";

export class Tile {

  // private _y: number;
  //
  // constructor(_y: number) {
  //   this._y = _y;
  // }

  private _isSelected: boolean = false;

  constructor(
    private _y: number,
    private _x: number,
    private _color: string,
    private _piece: Piece|undefined
  ) { }

  get y(): number {
    return this._y;
  }

  set y(value: number) {
    this._y = value;
  }

  get x(): number {
    return this._x;
  }

  set x(value: number) {
    this._x = value;
  }

  get piece(): Piece | undefined {
    return this._piece;
  }

  set piece(value: Piece | undefined) {
    this._piece = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  get isSelected(): boolean {
    return this._isSelected;
  }

  set isSelected(value: boolean) {
    this._isSelected = value;
  }
}
