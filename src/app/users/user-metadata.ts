export class User{
  private _id: string;
  private _email: string;
  private _password: string;
  private _displayName: string;
  private _phoneNumber: string;
  private _photoURL: string;
  private _verified: boolean;
  private _firstlogin: boolean;

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  get displayName(): string {
    return this._displayName;
  }

  set displayName(value: string) {
    this._displayName = value;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  set phoneNumber(value: string) {
    this._phoneNumber = value;
  }

  get photoURL(): string {
    return this._photoURL;
  }

  set photoURL(value: string) {
    this._photoURL = value;
  }

  get verified(): boolean {
    return this._verified;
  }

  set verified(value: boolean) {
    this._verified = value;
  }

  get firstlogin(): boolean {
    return this._firstlogin;
  }

  set firstlogin(value: boolean) {
    this._firstlogin = value;
  }
}
