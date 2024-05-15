import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loggedIn: boolean = false;

  public get loggedIn() {
    return this._loggedIn;
  }

  public toggle() {
    this._loggedIn = !this.loggedIn;
  }
}
