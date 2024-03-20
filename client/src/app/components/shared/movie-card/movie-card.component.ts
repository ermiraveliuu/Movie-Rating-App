import {Component, Input, OnInit} from "@angular/core";
import {TuiIslandModule} from "@taiga-ui/kit";

@Component({
  selector: 'movie-card',
  templateUrl: 'movie-card.component.html',
  styleUrls: ['movie-card.component.scss'],
  standalone: true,
  imports: [
    TuiIslandModule
  ]
})
export class MovieCardComponent implements OnInit{

  @Input() movie: any;

  ngOnInit() {
    console.log(this.movie);
  }

  singleMovie =       {
    "adult": false,
    "backdrop_path": "/mExN6lJHmLeGjwDmDrNNjR4MdCq.jpg",
    "genre_ids": [
      28,
      12,
      16,
      35,
      10751
    ],
    "id": 1011985,
    "original_language": "en",
    "original_title": "Kung Fu Panda 4",
    "overview": "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
    "popularity": 5294.537,
    "poster_path": "/wYOuMSTR5D0dSwtqjYq59aqziT1.jpg",
    "release_date": "2024-03-02",
    "title": "Kung Fu Panda 4",
    "video": false,
    "vote_average": 7,
    "vote_count": 178
  }
}
