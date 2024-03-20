import {Injectable} from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DarkModeService {
  private _darkMode: boolean = true;

  public toggleDarkMode() {
    this._darkMode = !this._darkMode
  }

  public get darkMode() {
    return this._darkMode;
  }
}
