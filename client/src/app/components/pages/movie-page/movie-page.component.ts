import {Component, inject, OnInit} from "@angular/core";
import {MovieCardComponent} from "../../shared/movie-card/movie-card.component";
import {DatePipe, JsonPipe, NgForOf, NgIf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {SetBackgroundImageDirective} from "../../../directives/set-background-image.directive";
import {TuiRatingModule, TuiTagModule} from "@taiga-ui/kit";
import {
  tuiIconBookmark,
  tuiIconBookmarkLarge,
  tuiIconHeart,
  tuiIconHeartLarge,
  tuiIconStar,
  tuiIconStarLarge
} from "@taiga-ui/icons";
import {FormsModule} from "@angular/forms";
import {TuiHintModule, TuiSvgModule} from "@taiga-ui/core";

@Component({
  selector: "movie-page",
  templateUrl: 'movie-page.component.html',
  styleUrls: ['movie-page.component.scss'],
  standalone: true,
  imports: [
    MovieCardComponent,
    NgForOf,
    JsonPipe,
    SetBackgroundImageDirective,
    TuiTagModule,
    NgIf,
    TuiRatingModule,
    FormsModule,
    TuiSvgModule,
    TuiHintModule,
    DatePipe
  ]
})
export class MoviePageComponent implements OnInit {
  json ={
    "page": 1,
    "results": [
      {
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
      },
      {
        "adult": false,
        "backdrop_path": "/deLWkOLZmBNkm8p16igfapQyqeq.jpg",
        "genre_ids": [
          14,
          12,
          28
        ],
        "id": 763215,
        "original_language": "en",
        "original_title": "Damsel",
        "overview": "A young woman's marriage to a charming prince turns into a fierce fight for survival when she's offered up as a sacrifice to a fire-breathing dragon.",
        "popularity": 2543.57,
        "poster_path": "/sMp34cNKjIb18UBOCoAv4DpCxwY.jpg",
        "release_date": "2024-03-08",
        "title": "Damsel",
        "video": false,
        "vote_average": 7.256,
        "vote_count": 930
      },
      {
        "adult": false,
        "backdrop_path": "/oFAukXiMPrwLpbulGmB5suEZlrm.jpg",
        "genre_ids": [
          28,
          12,
          878,
          14,
          18
        ],
        "id": 624091,
        "original_language": "id",
        "original_title": "Sri Asih",
        "overview": "Alana discover the truth about her origin: she’s not an ordinary human being. She may be the gift for humanity and become its protector as Sri Asih. Or a destruction, if she can’t control her anger.",
        "popularity": 1827.462,
        "poster_path": "/wShcJSKMFg1Dy1yq7kEZuay6pLS.jpg",
        "release_date": "2022-11-17",
        "title": "Sri Asih",
        "video": false,
        "vote_average": 6.317,
        "vote_count": 30
      },
      {
        "adult": false,
        "backdrop_path": "/mDeUmPe4MF35WWlAqj4QFX5UauJ.jpg",
        "genre_ids": [
          28,
          27,
          53
        ],
        "id": 1096197,
        "original_language": "pt",
        "original_title": "No Way Up",
        "overview": "Characters from different backgrounds are thrown together when the plane they're travelling on crashes into the Pacific Ocean. A nightmare fight for survival ensues with the air supply running out and dangers creeping in from all sides.",
        "popularity": 1548.682,
        "poster_path": "/hu40Uxp9WtpL34jv3zyWLb5zEVY.jpg",
        "release_date": "2024-01-18",
        "title": "No Way Up",
        "video": false,
        "vote_average": 6.141,
        "vote_count": 251
      },
      {
        "adult": false,
        "backdrop_path": "/xvk5AhfhgQcTuaCQyq3XqAnhEma.jpg",
        "genre_ids": [
          28,
          12,
          35
        ],
        "id": 848538,
        "original_language": "en",
        "original_title": "Argylle",
        "overview": "When the plots of reclusive author Elly Conway's fictional espionage novels begin to mirror the covert actions of a real-life spy organization, quiet evenings at home become a thing of the past. Accompanied by her cat Alfie and Aiden, a cat-allergic spy, Elly races across the world to stay one step ahead of the killers as the line between Conway's fictional world and her real one begins to blur.",
        "popularity": 1353.29,
        "poster_path": "/95VlSEfLMqeX36UVcHJuNlWEpwf.jpg",
        "release_date": "2024-01-31",
        "title": "Argylle",
        "video": false,
        "vote_average": 6.175,
        "vote_count": 629
      },
      {
        "adult": false,
        "backdrop_path": "/cu5Qk2QHxOyyMrD3Bq93DxgmJer.jpg",
        "genre_ids": [
          28,
          80
        ],
        "id": 1046090,
        "original_language": "zh",
        "original_title": "周處除三害",
        "overview": "The arrogant, third most-wanted criminal in Taiwan, decides to get rid of the top two competitors and crowns himself the most-wanted criminal before dying.",
        "popularity": 1206.344,
        "poster_path": "/7IJ7F8tX7IAkpUdaGovOBJqORnJ.jpg",
        "release_date": "2023-10-06",
        "title": "The Pig, the Snake and the Pigeon",
        "video": false,
        "vote_average": 7.551,
        "vote_count": 88
      },
      {
        "adult": false,
        "backdrop_path": "/47olX0FCvUCfAqlp8cK0O5fKLav.jpg",
        "genre_ids": [
          16,
          35,
          878
        ],
        "id": 1239251,
        "original_language": "en",
        "original_title": "Megamind vs. the Doom Syndicate",
        "overview": "Megamind's former villain team, The Doom Syndicate, has returned. Our newly crowned blue hero must now keep up evil appearances until he can assemble his friends (Roxanne, Ol' Chum and Keiko) to stop his former evil teammates from launching Metro City to the Moon.",
        "popularity": 1106.88,
        "poster_path": "/yRZfiG1QpRkBc7fAmxfcR7Md5EC.jpg",
        "release_date": "2024-03-01",
        "title": "Megamind vs. the Doom Syndicate",
        "video": false,
        "vote_average": 5.705,
        "vote_count": 123
      },
      {
        "adult": false,
        "backdrop_path": "/9Le7N3fmrHnWwdxCg35jSSawFyK.jpg",
        "genre_ids": [
          878,
          12
        ],
        "id": 693134,
        "original_language": "en",
        "original_title": "Dune: Part Two",
        "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
        "popularity": 1105.744,
        "poster_path": "/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
        "release_date": "2024-02-27",
        "title": "Dune: Part Two",
        "video": false,
        "vote_average": 8.396,
        "vote_count": 1852
      },
      {
        "adult": false,
        "backdrop_path": "/ekRp1sEA8pnuzVHQkUESTgNSKdW.jpg",
        "genre_ids": [
          878,
          28,
          80
        ],
        "id": 932420,
        "original_language": "en",
        "original_title": "Code 8 Part II",
        "overview": "In a world where superpowered people are heavily policed by robots, an ex-con teams up with a drug lord he despises to protect a teen from a corrupt cop.",
        "popularity": 1058.104,
        "poster_path": "/hhvMTxlTZtnCOe7YFhod9uz3m37.jpg",
        "release_date": "2024-02-27",
        "title": "Code 8 Part II",
        "video": false,
        "vote_average": 6.591,
        "vote_count": 301
      },
      {
        "adult": false,
        "backdrop_path": "/4Ep2KivIBUZbkS7kHjW7Qywnhhj.jpg",
        "genre_ids": [
          28
        ],
        "id": 1049948,
        "original_language": "en",
        "original_title": "Vikings: Battle of Heirs",
        "overview": "A young Viking must come to terms with the realization that he may be the King's son, who was switched at birth, but not before others try to take his rightful place.",
        "popularity": 1024.67,
        "poster_path": "/87goLbbqrJqAxqDS5cBsik1zKT.jpg",
        "release_date": "2023-04-28",
        "title": "Vikings: Battle of Heirs",
        "video": false,
        "vote_average": 7,
        "vote_count": 3
      },
      {
        "adult": false,
        "backdrop_path": "/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg",
        "genre_ids": [
          28,
          53,
          10752
        ],
        "id": 969492,
        "original_language": "en",
        "original_title": "Land of Bad",
        "overview": "When a Delta Force special ops mission goes terribly wrong, Air Force drone pilot Reaper has 48 hours to remedy what has devolved into a wild rescue operation. With no weapons and no communication other than the drone above, the ground mission suddenly becomes a full-scale battle when the team is discovered by the enemy.",
        "popularity": 989.987,
        "poster_path": "/lYwjlcBjokC9EhfzfAOkTMQd5Ku.jpg",
        "release_date": "2024-01-25",
        "title": "Land of Bad",
        "video": false,
        "vote_average": 7.011,
        "vote_count": 359
      },
      {
        "adult": false,
        "backdrop_path": "/o6e8Y0Q7RZIWi4qcJq4s5OYOVJs.jpg",
        "genre_ids": [
          878,
          10749,
          35
        ],
        "id": 792307,
        "original_language": "en",
        "original_title": "Poor Things",
        "overview": "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
        "popularity": 960.54,
        "poster_path": "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
        "release_date": "2023-12-07",
        "title": "Poor Things",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 2452
      },
      {
        "adult": false,
        "backdrop_path": "/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg",
        "genre_ids": [
          28,
          14
        ],
        "id": 634492,
        "original_language": "en",
        "original_title": "Madame Web",
        "overview": "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
        "popularity": 833.965,
        "poster_path": "/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
        "release_date": "2024-02-14",
        "title": "Madame Web",
        "video": false,
        "vote_average": 5.5,
        "vote_count": 539
      },
      {
        "adult": false,
        "backdrop_path": "/gklkxY0veMajdCiGe6ggsh07VG2.jpg",
        "genre_ids": [
          16,
          28,
          12,
          35,
          10751
        ],
        "id": 940551,
        "original_language": "en",
        "original_title": "Migration",
        "overview": "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
        "popularity": 813.287,
        "poster_path": "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
        "release_date": "2023-12-06",
        "title": "Migration",
        "video": false,
        "vote_average": 7.567,
        "vote_count": 953
      },
      {
        "adult": false,
        "backdrop_path": "/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg",
        "genre_ids": [
          35,
          10749
        ],
        "id": 1072790,
        "original_language": "en",
        "original_title": "Anyone But You",
        "overview": "After an amazing first date, Bea and Ben’s fiery attraction turns ice cold — until they find themselves unexpectedly reunited at a destination wedding in Australia. So they do what any two mature adults would do: pretend to be a couple.",
        "popularity": 765.206,
        "poster_path": "/5qHoazZiaLe7oFBok7XlUhg96f2.jpg",
        "release_date": "2023-12-21",
        "title": "Anyone But You",
        "video": false,
        "vote_average": 7.1,
        "vote_count": 1033
      },
      {
        "adult": false,
        "backdrop_path": "/yyFc8Iclt2jxPmLztbP617xXllT.jpg",
        "genre_ids": [
          35,
          10751,
          14
        ],
        "id": 787699,
        "original_language": "en",
        "original_title": "Wonka",
        "overview": "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
        "popularity": 736.112,
        "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
        "release_date": "2023-12-06",
        "title": "Wonka",
        "video": false,
        "vote_average": 7.202,
        "vote_count": 2575
      },
      {
        "adult": false,
        "backdrop_path": "/nb3xI8XI3w4pMVZ38VijbsyBqP4.jpg",
        "genre_ids": [
          18,
          36
        ],
        "id": 872585,
        "original_language": "en",
        "original_title": "Oppenheimer",
        "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
        "popularity": 698.282,
        "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        "release_date": "2023-07-19",
        "title": "Oppenheimer",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 7248
      },
      {
        "adult": false,
        "backdrop_path": "/i7nnmCTnjK50vNqbMfVtmoVULWJ.jpg",
        "genre_ids": [
          28
        ],
        "id": 1081620,
        "original_language": "en",
        "original_title": "The Weapon",
        "overview": "Dallas is a one-man killing machine on a mysterious rampage. His attacks on biker gangs and meth labs anger the Vegas mob boss who’s holding Dallas’ girlfriend hostage. But who is Dallas working for? Even torture won’t make him talk, and he won’t stop until justice is served.",
        "popularity": 689.136,
        "poster_path": "/slQYCDzCMM8SBh9Xa3aPeM2fekA.jpg",
        "release_date": "2023-02-17",
        "title": "The Weapon",
        "video": false,
        "vote_average": 5.3,
        "vote_count": 16
      },
      {
        "adult": false,
        "backdrop_path": "/hIUs8RzKlrzgbWxn2EpWmiTFqCc.jpg",
        "genre_ids": [
          878,
          53
        ],
        "id": 870404,
        "original_language": "en",
        "original_title": "Meteor",
        "overview": "After a meteor collides into Earth, a lonely rancher and a lost young girl are on the run from vicious mercenaries.",
        "popularity": 652.155,
        "poster_path": "/tVMddOS5bi3YPVPgTPlEw0TOWoF.jpg",
        "release_date": "2021-09-01",
        "title": "Meteor",
        "video": false,
        "vote_average": 5.5,
        "vote_count": 81
      },
      {
        "adult": false,
        "backdrop_path": "/td2NcEUn7MPWzpFFjvHLsVQ2pkZ.jpg",
        "genre_ids": [
          28,
          53
        ],
        "id": 984249,
        "original_language": "en",
        "original_title": "Ruthless",
        "overview": "A high school coach, whose teenage daughter was murdered, takes matters into his own hands by going after the men who kidnap his students for their sex trafficking operation.",
        "popularity": 627.477,
        "poster_path": "/3hVt5fEuUxNZ5h6ynczcUbq6lpJ.jpg",
        "release_date": "2023-12-14",
        "title": "Ruthless",
        "video": false,
        "vote_average": 6.733,
        "vote_count": 30
      }
    ],
    "total_pages": 43095,
    "total_results": 861894
  }
  movie:any;
  private route = inject(ActivatedRoute);
  details?: {title: string, content: string}[];

  getGenreName(genreId: number) {
    return this.genres.find(genre => genre.id === genreId)?.name || ''
  }

  ngOnInit() {
    const movieId = this.route.snapshot.params['id']
    this.movie = this.json.results.find(movie => movie.id == movieId)
    this.details = [
      {title: 'Rating', content: this.movie.vote_average},
      {title: 'Overview', content: this.movie.overview},
    ]
  }

  protected round(rating: number) {
    return rating.toFixed(1)
  }


genres = [
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
    {
      "id": 10749,
      "name": "Romance"
    },
    {
      "id": 878,
      "name": "Science Fiction"
    },
    {
      "id": 10770,
      "name": "TV Movie"
    },
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    {
      "id": 37,
      "name": "Western"
    }
]
    protected readonly tuiIconStar = tuiIconStar;
  protected readonly tuiIconStarLarge = tuiIconStarLarge;
  protected readonly tuiIconBookmark = tuiIconBookmark;
  protected readonly tuiIconBookmarkLarge = tuiIconBookmarkLarge;
  protected readonly tuiIconHeart = tuiIconHeart;
  protected readonly tuiIconHeartLarge = tuiIconHeartLarge;
}
