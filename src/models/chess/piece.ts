
export abstract class Piece {

  constructor(
    private _image: string,
    private _color: string
  ) { }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  abstract move(): void;

}
