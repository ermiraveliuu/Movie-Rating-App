import {Component, inject} from "@angular/core";
import {TuiButtonModule, TuiSvgModule} from "@taiga-ui/core";
import {SearchComponent} from "../search/search.component";
import {
  tuiIconCompass,
  tuiIconCompassLarge,
  tuiIconFilm,
  tuiIconFilmLarge,
  tuiIconFilmOutline,
  tuiIconMoon,
  tuiIconSun,
  tuiIconSunLarge,
  tuiIconUser,
  tuiIconUserLarge
} from "@taiga-ui/icons";
import {NgIf} from "@angular/common";
import {DarkModeService} from "../../../services/dark-mode.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  standalone: true,
  imports: [
    TuiSvgModule,
    TuiButtonModule,
    SearchComponent,
    NgIf,
  ]
})
export class HeaderComponent {

  protected readonly tuiIconUser = tuiIconUser;
  protected readonly tuiIconCompass = tuiIconCompass;

  protected readonly darkModeService = inject(DarkModeService);
  protected readonly authService = inject(AuthService);
  loggedIn = false;

  protected get darkMode() {
    return this.darkModeService.darkMode;
  }

  protected toggleDarkMode() {
    this.darkModeService.toggleDarkMode();
  }

  protected readonly tuiIconSun = tuiIconSun;
  protected readonly tuiIconUserLarge = tuiIconUserLarge;
  protected readonly tuiIconCompassLarge = tuiIconCompassLarge;
  protected readonly tuiIconSunLarge = tuiIconSunLarge;
  protected readonly tuiIconMoon = tuiIconMoon;
  protected readonly tuiIconFilm = tuiIconFilm;
  protected readonly tuiIconFilmOutline = tuiIconFilmOutline;
  protected readonly tuiIconFilmLarge = tuiIconFilmLarge;
}
