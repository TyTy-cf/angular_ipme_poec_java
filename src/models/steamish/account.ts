import {IPostAccount} from "./i-post-account";

export class Account {

  private _id: number = 0;
  private _name: string = '';
  private _email: string = '';
  private _nickname: string = '';
  private _wallet: number = 0;
  private _libraries: string[];
  private _isShown: boolean = false;

  constructor() {
    this._libraries = []
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  get wallet(): number {
    return this._wallet;
  }

  set wallet(value: number) {
    this._wallet = value;
  }

  get libraries(): string[] {
    return this._libraries;
  }

  set libraries(value: string[]) {
    this._libraries = value;
  }

  get isShown(): boolean {
    return this._isShown;
  }

  set isShown(value: boolean) {
    this._isShown = value;
  }

  toPostJson(): IPostAccount {
    return {
      name: this._name,
      nickname: this._nickname,
      email: this._email,
      wallet: this._wallet,
      libraries: this._libraries
    };
  }
}
