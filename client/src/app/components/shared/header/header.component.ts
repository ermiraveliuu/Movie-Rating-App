import {Component} from "@angular/core";
import {TuiButtonModule, TuiSvgModule} from "@taiga-ui/core";
import {SearchComponent} from "../search/search.component";
import {tuiIconCompass, tuiIconUser} from "@taiga-ui/icons";
import {NgIf} from "@angular/common";
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
  loggedIn = false;
}
