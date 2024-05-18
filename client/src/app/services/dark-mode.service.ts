import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private _darkMode: boolean;
  localStorageKey = 'darkMode';

  constructor() {
    if (localStorage.getItem(this.localStorageKey) === null) {
      localStorage.setItem(this.localStorageKey, 'true');
      this._darkMode = true;
      return;
    }
    this._darkMode = localStorage.getItem(this.localStorageKey) === 'true';
  }

  public toggleDarkMode() {
    localStorage.setItem(
      this.localStorageKey,
      localStorage.getItem(this.localStorageKey) == 'true' ? 'false' : 'true'
    );
    this._darkMode = !this._darkMode;
  }

  public get darkMode() {
    return this._darkMode;
  }
}
