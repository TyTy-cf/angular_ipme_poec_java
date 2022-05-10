
export class Game {

  private _name: string = '';
  private _publishedAt: Date = new Date();
  private _price: number = 0;
  private _genres: Array<string>;
  private _languages: Array<string>;
  private _thumbnailCover: string = '';

  constructor() {
    this._genres = [];
    this._languages = [];
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get publishedAt(): Date {
    return this._publishedAt;
  }

  set publishedAt(value: Date) {
    this._publishedAt = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get genres(): Array<string> {
    return this._genres;
  }

  set genres(value: Array<string>) {
    this._genres = value;
  }

  get languages(): Array<string> {
    return this._languages;
  }

  set languages(value: Array<string>) {
    this._languages = value;
  }

  get thumbnailCover(): string {
    return this._thumbnailCover;
  }

  set thumbnailCover(value: string) {
    this._thumbnailCover = value;
  }
}
