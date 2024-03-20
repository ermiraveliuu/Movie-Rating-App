import {Component} from "@angular/core";
import {MovieCardComponent} from "../../shared/movie-card/movie-card.component";

@Component({
  selector: 'home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss'],
  standalone: true,
  imports: [
    MovieCardComponent
  ]
})
export class HomePageComponent {

}
