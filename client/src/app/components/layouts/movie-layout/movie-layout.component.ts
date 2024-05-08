import {Component, inject} from "@angular/core";
import {MovieCardComponent} from "../../shared/movie-card/movie-card.component";
import {JsonPipe, NgForOf} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: "movie-layout",
  templateUrl: 'movie-layout.component.html',
  styleUrls: ['movie-layout.component.scss'],
  standalone: true,
  imports: [
    MovieCardComponent,
    NgForOf,
    JsonPipe
  ]
})
export class MovieLayoutComponent {

  json = {
    results: [
      {
        "adult": false,
        "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
        "genre_ids": [
          18,
          80
        ],
        "id": 278,
        "original_language": "en",
        "original_title": "The Shawshank Redemption",
        "overview": "Imprisoned in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        "popularity": 133.625,
        "poster_path": "/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
        "release_date": "1994-09-23",
        "title": "The Shawshank Redemption",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 26110
      },
      {
        "adult": false,
        "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        "genre_ids": [
          18,
          80
        ],
        "id": 238,
        "original_language": "en",
        "original_title": "The Godfather",
        "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        "popularity": 128.403,
        "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "release_date": "1972-03-14",
        "title": "The Godfather",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 19792
      },
      {
        "adult": false,
        "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
        "genre_ids": [
          18,
          80
        ],
        "id": 240,
        "original_language": "en",
        "original_title": "The Godfather Part II",
        "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
        "popularity": 159.502,
        "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
        "release_date": "1974-12-20",
        "title": "The Godfather Part II",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 11954
      },
      {
        "adult": false,
        "backdrop_path": "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
        "genre_ids": [
          18,
          36,
          10752
        ],
        "id": 424,
        "original_language": "en",
        "original_title": "Schindler's List",
        "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
        "popularity": 91.031,
        "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
        "release_date": "1993-12-15",
        "title": "Schindler's List",
        "video": false,
        "vote_average": 8.567,
        "vote_count": 15361
      },
      {
        "adult": false,
        "backdrop_path": "/qqHQsStV6exghCM7zbObuYBiYxw.jpg",
        "genre_ids": [
          18
        ],
        "id": 389,
        "original_language": "en",
        "original_title": "12 Angry Men",
        "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
        "popularity": 96.642,
        "poster_path": "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
        "release_date": "1957-04-10",
        "title": "12 Angry Men",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 8228
      },
      {
        "adult": false,
        "backdrop_path": "/mSDsSDwaP3E7dEfUPWy4J0djt4O.jpg",
        "genre_ids": [
          16,
          10751,
          14
        ],
        "id": 129,
        "original_language": "ja",
        "original_title": "千と千尋の神隠し",
        "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
        "popularity": 115.049,
        "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        "release_date": "2001-07-20",
        "title": "Spirited Away",
        "video": false,
        "vote_average": 8.537,
        "vote_count": 15887
      },
      {
        "adult": false,
        "backdrop_path": "/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
        "genre_ids": [
          35,
          18,
          10749
        ],
        "id": 19404,
        "original_language": "hi",
        "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
        "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
        "popularity": 49.832,
        "poster_path": "/lfRkUr7DYdHldAqi3PwdQGBRBPM.jpg",
        "release_date": "1995-10-20",
        "title": "Dilwale Dulhania Le Jayenge",
        "video": false,
        "vote_average": 8.534,
        "vote_count": 4377
      },
      {
        "adult": false,
        "backdrop_path": "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
        "genre_ids": [
          18,
          28,
          80,
          53
        ],
        "id": 155,
        "original_language": "en",
        "original_title": "The Dark Knight",
        "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        "popularity": 131.041,
        "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "release_date": "2008-07-16",
        "title": "The Dark Knight",
        "video": false,
        "vote_average": 8.515,
        "vote_count": 31897
      },
      {
        "adult": false,
        "backdrop_path": "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
        "genre_ids": [
          35,
          53,
          18
        ],
        "id": 496243,
        "original_language": "ko",
        "original_title": "기생충",
        "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        "popularity": 107.11,
        "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        "release_date": "2019-05-30",
        "title": "Parasite",
        "video": false,
        "vote_average": 8.51,
        "vote_count": 17496
      },
      {
        "adult": false,
        "backdrop_path": "/vxJ08SvwomfKbpboCWynC3uqUg4.jpg",
        "genre_ids": [
          14,
          18,
          80
        ],
        "id": 497,
        "original_language": "en",
        "original_title": "The Green Mile",
        "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
        "popularity": 116.005,
        "poster_path": "/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
        "release_date": "1999-12-10",
        "title": "The Green Mile",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 16791
      },
      {
        "adult": false,
        "backdrop_path": "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
        "genre_ids": [
          16,
          10749,
          18
        ],
        "id": 372058,
        "original_language": "ja",
        "original_title": "君の名は。",
        "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
        "popularity": 109.063,
        "poster_path": "/q719jXXEzOoYaps6babgKnONONX.jpg",
        "release_date": "2016-08-26",
        "title": "Your Name.",
        "video": false,
        "vote_average": 8.496,
        "vote_count": 10948
      },
      {
        "adult": false,
        "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
        "genre_ids": [
          53,
          80
        ],
        "id": 680,
        "original_language": "en",
        "original_title": "Pulp Fiction",
        "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
        "popularity": 379.265,
        "poster_path": "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "release_date": "1994-09-10",
        "title": "Pulp Fiction",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 27042
      },
      {
        "adult": false,
        "backdrop_path": "/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg",
        "genre_ids": [
          12,
          14,
          28
        ],
        "id": 122,
        "original_language": "en",
        "original_title": "The Lord of the Rings: The Return of the King",
        "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
        "popularity": 151.999,
        "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        "release_date": "2003-12-01",
        "title": "The Lord of the Rings: The Return of the King",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 23356
      },
      {
        "adult": false,
        "backdrop_path": "/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
        "genre_ids": [
          35,
          18,
          10749
        ],
        "id": 13,
        "original_language": "en",
        "original_title": "Forrest Gump",
        "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
        "popularity": 176.978,
        "poster_path": "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        "release_date": "1994-06-23",
        "title": "Forrest Gump",
        "video": false,
        "vote_average": 8.475,
        "vote_count": 26571
      },
      {
        "adult": false,
        "backdrop_path": "/Adrip2Jqzw56KeuV2nAxucKMNXA.jpg",
        "genre_ids": [
          37
        ],
        "id": 429,
        "original_language": "it",
        "original_title": "Il buono, il brutto, il cattivo",
        "overview": "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
        "popularity": 87.029,
        "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
        "release_date": "1966-12-22",
        "title": "The Good, the Bad and the Ugly",
        "video": false,
        "vote_average": 8.467,
        "vote_count": 8240
      },
      {
        "adult": false,
        "backdrop_path": "/sw7mordbZxgITU877yTpZCud90M.jpg",
        "genre_ids": [
          18,
          80
        ],
        "id": 769,
        "original_language": "en",
        "original_title": "GoodFellas",
        "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
        "popularity": 203.759,
        "poster_path": "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
        "release_date": "1990-09-12",
        "title": "GoodFellas",
        "video": false,
        "vote_average": 8.465,
        "vote_count": 12370
      },
      {
        "adult": false,
        "backdrop_path": "/dlC0ed9Ugh3FzydnkBtV5lRXUu4.jpg",
        "genre_ids": [
          16,
          18,
          10752
        ],
        "id": 12477,
        "original_language": "ja",
        "original_title": "火垂るの墓",
        "overview": "In the final months of World War II, 14-year-old Seita and his sister Setsuko are orphaned when their mother is killed during an air raid in Kobe, Japan. After a falling out with their aunt, they move into an abandoned bomb shelter. With no surviving relatives and their emergency rations depleted, Seita and Setsuko struggle to survive.",
        "popularity": 0.6,
        "poster_path": "/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg",
        "release_date": "1988-04-16",
        "title": "Grave of the Fireflies",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 5227
      },
      {
        "adult": false,
        "backdrop_path": "/gutU32BiBxJvJdzLv5RWC9hQhNh.jpg",
        "genre_ids": [
          18
        ],
        "id": 1058694,
        "original_language": "en",
        "original_title": "Radical",
        "overview": "In a Mexican border town plagued by neglect, corruption, and violence, a frustrated teacher tries a radical new method to break through his students’ apathy and unlock their curiosity, their potential… and maybe even their genius.",
        "popularity": 61.362,
        "poster_path": "/eSatbygYZp8ooprBHZdb6GFZxGB.jpg",
        "release_date": "2023-10-19",
        "title": "Radical",
        "video": false,
        "vote_average": 8.459,
        "vote_count": 355
      },
      {
        "adult": false,
        "backdrop_path": "/zoVeIgKzGJzpdG6Gwnr7iOYfIMU.jpg",
        "genre_ids": [
          18,
          10749
        ],
        "id": 11216,
        "original_language": "it",
        "original_title": "Nuovo Cinema Paradiso",
        "overview": "A filmmaker recalls his childhood, when he fell in love with the movies at his village's theater and formed a deep friendship with the theater's projectionist.",
        "popularity": 36.731,
        "poster_path": "/8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg",
        "release_date": "1988-11-17",
        "title": "Cinema Paradiso",
        "video": false,
        "vote_average": 8.453,
        "vote_count": 4186
      },
      {
        "adult": false,
        "backdrop_path": "/qvZ91FwMq6O47VViAr8vZNQz3WI.jpg",
        "genre_ids": [
          28,
          18
        ],
        "id": 346,
        "original_language": "ja",
        "original_title": "七人の侍",
        "overview": "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
        "popularity": 55.079,
        "poster_path": "/8OKmBV5BUFzmozIC3pPWKHy17kx.jpg",
        "release_date": "1954-04-26",
        "title": "Seven Samurai",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 3479
      },

      {
        "adult": false,
        "backdrop_path": "/gavyCu1UaTaTNPsVaGXT6pe5u24.jpg",
        "genre_ids": [
          35,
          18
        ],
        "id": 637,
        "original_language": "it",
        "original_title": "La vita è bella",
        "overview": "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
        "popularity": 49.369,
        "poster_path": "/74hLDKjD5aGYOotO6esUVaeISa2.jpg",
        "release_date": "1997-12-20",
        "title": "Life Is Beautiful",
        "video": false,
        "vote_average": 8.452,
        "vote_count": 12696
      },
      {
        "adult": false,
        "backdrop_path": "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
        "genre_ids": [
          18
        ],
        "id": 550,
        "original_language": "en",
        "original_title": "Fight Club",
        "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
        "popularity": 237.134,
        "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        "release_date": "1999-10-15",
        "title": "Fight Club",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 28472
      },
      {
        "adult": false,
        "backdrop_path": "/3RMLbSEXOn1CzLoNT7xFeLfdxhq.jpg",
        "genre_ids": [
          10749,
          16
        ],
        "id": 372754,
        "original_language": "ja",
        "original_title": "同級生",
        "overview": "Rihito Sajo, an honor student with a perfect score on the entrance exam and Hikaru Kusakabe, in a band and popular among girls, would have never crossed paths. Until one day they started talking at the practice for their school’s upcoming chorus festival. After school, the two meet regularly, as Hikaru helps Rihito to improve his singing skills. While they listen to each other’s voice and harmonize, their hearts start to beat together.",
        "popularity": 15.768,
        "poster_path": "/cIfRCA5wEvj9tApca4UDUagQEiM.jpg",
        "release_date": "2016-02-20",
        "title": "Dou kyu sei – Classmates",
        "video": false,
        "vote_average": 8.44,
        "vote_count": 351
      },
      {
        "adult": false,
        "backdrop_path": "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
        "genre_ids": [
          12,
          18,
          878
        ],
        "id": 157336,
        "original_language": "en",
        "original_title": "Interstellar",
        "overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
        "popularity": 361.411,
        "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        "release_date": "2014-11-05",
        "title": "Interstellar",
        "video": false,
        "vote_average": 8.434,
        "vote_count": 34271
      },
      {
        "adult": false,
        "backdrop_path": "/uif5fUshJrXyyDzfpzp1DLw3N0S.jpg",
        "genre_ids": [
          27,
          53,
          9648
        ],
        "id": 539,
        "original_language": "en",
        "original_title": "Psycho",
        "overview": "When larcenous real estate clerk Marion Crane goes on the lam with a wad of cash and hopes of starting a new life, she ends up at the notorious Bates Motel, where manager Norman Bates cares for his housebound mother.",
        "popularity": 175.545,
        "poster_path": "/yz4QVqPx3h1hD1DfqqQkCq3rmxW.jpg",
        "release_date": "1960-06-22",
        "title": "Psycho",
        "video": false,
        "vote_average": 8.434,
        "vote_count": 9715
      },
      {
        "adult": false,
        "backdrop_path": "/uvitbjFU4JqvMwIkMWHp69bmUzG.jpg",
        "genre_ids": [
          18,
          80
        ],
        "id": 598,
        "original_language": "pt",
        "original_title": "Cidade de Deus",
        "overview": "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
        "popularity": 98.975,
        "poster_path": "/k7eYdWvhYQyRQoU2TB2A2Xu2TfD.jpg",
        "release_date": "2002-08-30",
        "title": "City of God",
        "video": false,
        "vote_average": 8.43,
        "vote_count": 7051
      },
      {
        "adult": false,
        "backdrop_path": "/w2uGvCpMtvRqZg6waC1hvLyZoJa.jpg",
        "genre_ids": [
          10749,
          18
        ],
        "id": 696374,
        "original_language": "en",
        "original_title": "Gabriel's Inferno",
        "overview": "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",
        "popularity": 14.729,
        "poster_path": "/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg",
        "release_date": "2020-05-29",
        "title": "Gabriel's Inferno",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 2391
      },
      {
        "adult": false,
        "backdrop_path": "/bxSBOAD8AuMHYMdW3jso9npAkgt.jpg",
        "genre_ids": [
          10751,
          18
        ],
        "id": 667257,
        "original_language": "es",
        "original_title": "Cosas imposibles",
        "overview": "Matilde is a woman who, after the death of her husband—a man who constantly abused her—finds her new best friend in Miguel, her young, insecure, disoriented and even dealer neighbor",
        "popularity": 17.117,
        "poster_path": "/t2Ew8NZ8Ci2kqmoecZUNQUFDJnQ.jpg",
        "release_date": "2021-06-17",
        "title": "Impossible Things",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 371
      },
      {
        "adult": false,
        "backdrop_path": "/l5K9elugftlcyIHHm4nylvsn26X.jpg",
        "genre_ids": [
          18
        ],
        "id": 255709,
        "original_language": "ko",
        "original_title": "소원",
        "overview": "After 8-year-old So-won narrowly survives a brutal sexual assault, her family labors to help her heal while coping with their own rage and grief.",
        "popularity": 21.474,
        "poster_path": "/x9yjkm9gIz5qI5fJMUTfBnWiB2o.jpg",
        "release_date": "2013-10-02",
        "title": "Hope",
        "video": false,
        "vote_average": 8.425,
        "vote_count": 663
      },
      {
        "adult": false,
        "backdrop_path": "/uPYa165sraN2c8gZBM9C47g3JoU.jpg",
        "genre_ids": [
          18,
          80
        ],
        "id": 311,
        "original_language": "en",
        "original_title": "Once Upon a Time in America",
        "overview": "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
        "popularity": 65.376,
        "poster_path": "/i0enkzsL5dPeneWnjl1fCWm6L7k.jpg",
        "release_date": "1984-05-23",
        "title": "Once Upon a Time in America",
        "video": false,
        "vote_average": 8.423,
        "vote_count": 5161
      },
      {
        "adult": false,
        "backdrop_path": "/qUq3QTr2KLvGIcN0GaaaYx9bbyH.jpg",
        "genre_ids": [
          18
        ],
        "id": 510,
        "original_language": "en",
        "original_title": "One Flew Over the Cuckoo's Nest",
        "overview": "A petty criminal fakes insanity to serve his sentence in a mental ward rather than prison. He soon finds himself as a leader to the other patients—and an enemy to the cruel, domineering nurse who runs the ward.",
        "popularity": 59.192,
        "poster_path": "/3jcbDmRFiQ83drXNOvRDeKHxS0C.jpg",
        "release_date": "1975-11-19",
        "title": "One Flew Over the Cuckoo's Nest",
        "video": false,
        "vote_average": 8.422,
        "vote_count": 10092
      },
      {
        "adult": false,
        "backdrop_path": "/uBZQOYZLIU9dBmd62fdzBAoropu.jpg",
        "genre_ids": [
          28,
          12,
          16,
          18
        ],
        "id": 704264,
        "original_language": "en",
        "original_title": "Primal: Tales of Savagery",
        "overview": "Genndy Tartakovsky's Primal: Tales of Savagery features a caveman and a dinosaur on the brink of extinction. Bonded by tragedy, this unlikely friendship becomes the only hope of survival.",
        "popularity": 14.643,
        "poster_path": "/9NBBkdxH0TjQEBSN2AzeE1sgsF9.jpg",
        "release_date": "2019-11-21",
        "title": "Primal: Tales of Savagery",
        "video": false,
        "vote_average": 8.418,
        "vote_count": 304
      },
      {
        "adult": false,
        "backdrop_path": "/x2RS3uTcsJJ9IfjNPcgDmukoEcQ.jpg",
        "genre_ids": [
          12,
          14,
          28
        ],
        "id": 120,
        "original_language": "en",
        "original_title": "The Lord of the Rings: The Fellowship of the Ring",
        "overview": "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
        "popularity": 163.616,
        "poster_path": "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        "release_date": "2001-12-18",
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 24305
      },
      {
        "adult": false,
        "backdrop_path": "/xqaN2WYQclQlqvKvsOcNgOx2vRn.jpg",
        "genre_ids": [
          14,
          16,
          12
        ],
        "id": 4935,
        "original_language": "ja",
        "original_title": "ハウルの動く城",
        "overview": "Sophie, a young milliner, is turned into an elderly woman by a witch who enters her shop and curses her. She encounters a wizard named Howl and gets caught up in his resistance to fighting for the king.",
        "popularity": 116.378,
        "poster_path": "/6pZgH10jhpToPcf0uvyTCPFhWpI.jpg",
        "release_date": "2004-09-09",
        "title": "Howl's Moving Castle",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 9427
      },
      {
        "adult": false,
        "backdrop_path": "/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg",
        "genre_ids": [
          10749,
          18
        ],
        "id": 724089,
        "original_language": "en",
        "original_title": "Gabriel's Inferno: Part II",
        "overview": "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
        "popularity": 12.062,
        "poster_path": "/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg",
        "release_date": "2020-07-31",
        "title": "Gabriel's Inferno: Part II",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 1500
      },
      {
        "adult": false,
        "backdrop_path": "/b9YkKJcW3pPaXgMZu9uoT7v9yRB.jpg",
        "genre_ids": [
          16,
          28,
          12,
          878
        ],
        "id": 324857,
        "original_language": "en",
        "original_title": "Spider-Man: Into the Spider-Verse",
        "overview": "Struggling to find his place in the world while juggling school and family, Brooklyn teenager Miles Morales is unexpectedly bitten by a radioactive spider and develops unfathomable powers just like the one and only Spider-Man. While wrestling with the implications of his new abilities, Miles discovers a super collider created by the madman Wilson \"Kingpin\" Fisk, causing others from across the Spider-Verse to be inadvertently transported to his dimension.",
        "popularity": 130.442,
        "poster_path": "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
        "release_date": "2018-12-06",
        "title": "Spider-Man: Into the Spider-Verse",
        "video": false,
        "vote_average": 8.404,
        "vote_count": 14971
      },
      {
        "adult": false,
        "backdrop_path": "/alQqTpmEkxSLgajfEYTsTH6nAKB.jpg",
        "genre_ids": [
          35,
          18,
          14
        ],
        "id": 40096,
        "original_language": "pt",
        "original_title": "O Auto da Compadecida",
        "overview": "The lively João Grilo and the sly Chicó are poor guys living in the hinterland who cheat a bunch of people in a small in Northeastern Brazil. When they die, they have to be judged by Christ, the Devil and the Virgin Mary before they are admitted to paradise.",
        "popularity": 13.798,
        "poster_path": "/imcOp1kJsCsAFCoOtY5OnPrFbAf.jpg",
        "release_date": "2000-09-15",
        "title": "A Dog's Will",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 1056
      },
      {
        "adult": false,
        "backdrop_path": "/6G73mNyooWAEQTpckPSnFxFoNmc.jpg",
        "genre_ids": [
          12,
          14,
          28
        ],
        "id": 121,
        "original_language": "en",
        "original_title": "The Lord of the Rings: The Two Towers",
        "overview": "Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
        "popularity": 107.465,
        "poster_path": "/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
        "release_date": "2002-12-18",
        "title": "The Lord of the Rings: The Two Towers",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 21119
      },
      {
        "adult": false,
        "backdrop_path": "/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg",
        "genre_ids": [
          10749,
          18
        ],
        "id": 761053,
        "original_language": "en",
        "original_title": "Gabriel's Inferno: Part III",
        "overview": "The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.",
        "popularity": 24.93,
        "poster_path": "/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg",
        "release_date": "2020-11-19",
        "title": "Gabriel's Inferno: Part III",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 1043
      },
      {
        "adult": false,
        "backdrop_path": "/aJCtkxLLzkk1pECehVjKHA2lBgw.jpg",
        "genre_ids": [
          12,
          28,
          878
        ],
        "id": 1891,
        "original_language": "en",
        "original_title": "The Empire Strikes Back",
        "overview": "The epic saga continues as Luke Skywalker, in hopes of defeating the evil Galactic Empire, learns the ways of the Jedi from aging master Yoda. But Darth Vader is more determined than ever to capture Luke. Meanwhile, rebel leader Princess Leia, cocky Han Solo, Chewbacca, and droids C-3PO and R2-D2 are thrown into various stages of capture, betrayal and despair.",
        "popularity": 62.045,
        "poster_path": "/nNAeTmF4CtdSgMDplXTDPOpYzsX.jpg",
        "release_date": "1980-05-20",
        "title": "The Empire Strikes Back",
        "video": false,
        "vote_average": 8.391,
        "vote_count": 16420
      },

      {
        "adult": false,
        "backdrop_path": "/ySaK6hpbCc2OE13ac7ovhgWwR5u.jpg",
        "genre_ids": [
          10402
        ],
        "id": 568332,
        "original_language": "en",
        "original_title": "Taylor Swift: Reputation Stadium Tour",
        "overview": "Taylor Swift takes the stage in Dallas for the Reputation Stadium Tour and celebrates a monumental night of music, memories and visual magic.",
        "popularity": 28.644,
        "poster_path": "/u6oXUTtOuJRPdUgUuPAVVJPSKCo.jpg",
        "release_date": "2018-12-31",
        "title": "Taylor Swift: Reputation Stadium Tour",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 363
      },
      {
        "adult": false,
        "backdrop_path": "/wVJG3u5Ru9tInxYiTCrJr4MpJ7Z.jpg",
        "genre_ids": [
          10402
        ],
        "id": 1160164,
        "original_language": "en",
        "original_title": "TAYLOR SWIFT | THE ERAS TOUR",
        "overview": "The cultural phenomenon continues on the big screen! Immerse yourself in this once-in-a-lifetime concert film experience with a breathtaking, cinematic view of the history-making tour.",
        "popularity": 53.856,
        "poster_path": "/jf3YO8hOqGHCupsREf5qymYq1n.jpg",
        "release_date": "2023-10-13",
        "title": "TAYLOR SWIFT | THE ERAS TOUR",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 331
      },
      {
        "adult": false,
        "backdrop_path": "/nC3IjYhUgZWgfKfFX0ygMigFwgc.jpg",
        "genre_ids": [
          28,
          18,
          36
        ],
        "id": 14537,
        "original_language": "ja",
        "original_title": "切腹",
        "overview": "Down-on-his-luck veteran Tsugumo Hanshirō enters the courtyard of the prosperous House of Iyi. Unemployed, and with no family, he hopes to find a place to commit seppuku—and a worthy second to deliver the coup de grâce in his suicide ritual. The senior counselor for the Iyi clan questions the ronin’s resolve and integrity, suspecting Hanshirō of seeking charity rather than an honorable end. What follows is a pair of interlocking stories which lay bare the difference between honor and respect, and promises to examine the legendary foundations of the Samurai code.",
        "popularity": 23.718,
        "poster_path": "/5konZnIbcAxZjP616Cz5o9bKEfW.jpg",
        "release_date": "1962-09-15",
        "title": "Harakiri",
        "video": false,
        "vote_average": 8.384,
        "vote_count": 923
      },
      {
        "adult": false,
        "backdrop_path": "/dVr11o9or7AS8AMPfwjSpEU83iU.jpg",
        "genre_ids": [
          18,
          10752
        ],
        "id": 423,
        "original_language": "en",
        "original_title": "The Pianist",
        "overview": "The true story of pianist Władysław Szpilman's experiences in Warsaw during the Nazi occupation. When the Jews of the city find themselves forced into a ghetto, Szpilman finds work playing in a café; and when his family is deported in 1942, he stays behind, works for a while as a laborer, and eventually goes into hiding in the ruins of the war-torn city.",
        "popularity": 65.12,
        "poster_path": "/2hFvxCCWrTmCYwfy7yum0GKRi3Y.jpg",
        "release_date": "2002-09-17",
        "title": "The Pianist",
        "video": false,
        "vote_average": 8.383,
        "vote_count": 8835
      },
      {
        "adult": false,
        "backdrop_path": "/vNXGrknx4GjWLgmuNTftWZluIUl.jpg",
        "genre_ids": [
          18,
          10402
        ],
        "id": 244786,
        "original_language": "en",
        "original_title": "Whiplash",
        "overview": "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
        "popularity": 204.371,
        "poster_path": "/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
        "release_date": "2014-10-10",
        "title": "Whiplash",
        "video": false,
        "vote_average": 8.383,
        "vote_count": 14593
      },
      {
        "adult": false,
        "backdrop_path": "/aVFx1VtlOxR3v0ADEatalXOvwbu.jpg",
        "genre_ids": [
          16,
          14,
          28
        ],
        "id": 620249,
        "original_language": "zh",
        "original_title": "罗小黑战记",
        "overview": "When cat spirit Luo Xiaohei's home is deforested by humans, he must find a new one. He runs into a group of other spirit creatures who take him under their wing with dreams of reconquering the land they say is rightfully theirs. However, they run into a human known as Wuxian who separates Luo Xiaohei from the other spirits and the two go on a journey, with the cat spirit learning to control his abilities as well as forming his own thoughts on whether or not he should ally with the spirits or the humans.",
        "popularity": 22.488,
        "poster_path": "/aLv87NgRJUPkQ6sVLP72IisDdt4.jpg",
        "release_date": "2019-08-27",
        "title": "The Legend of Hei",
        "video": false,
        "vote_average": 8.38,
        "vote_count": 338
      },
      {
        "adult": false,
        "backdrop_path": "/5lAMQMWpXMsirvtLLvW7cJgEPkU.jpg",
        "genre_ids": [
          16,
          18
        ],
        "id": 378064,
        "original_language": "ja",
        "original_title": "映画 聲の形",
        "overview": "Shouya Ishida starts bullying the new girl in class, Shouko Nishimiya, because she is deaf. But as the teasing continues, the rest of the class starts to turn on Shouya for his lack of compassion. When they leave elementary school, Shouko and Shouya do not speak to each other again... until an older, wiser Shouya, tormented by his past behaviour, decides he must see Shouko once more. He wants to atone for his sins, but is it already too late...?",
        "popularity": 49.095,
        "poster_path": "/tuFaWiqX0TXoWu7DGNcmX3UW7sT.jpg",
        "release_date": "2016-09-17",
        "title": "A Silent Voice: The Movie",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 3775
      },
      {
        "adult": false,
        "backdrop_path": "/iwgl8zlrrfvfWp9k9Paj8lvFEvS.jpg",
        "genre_ids": [
          80,
          9648,
          53
        ],
        "id": 807,
        "original_language": "en",
        "original_title": "Se7en",
        "overview": "Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the \"seven deadly sins\" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.",
        "popularity": 296.967,
        "poster_path": "/6yoghtyTpznpBik8EngEmJskVUO.jpg",
        "release_date": "1995-09-22",
        "title": "Se7en",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 20301
      },
      {
        "adult": false,
        "backdrop_path": "/kGWpZewzInbzTuaIHcy0bFgzXuM.jpg",
        "genre_ids": [
          16,
          28,
          12,
          878
        ],
        "id": 569094,
        "original_language": "en",
        "original_title": "Spider-Man: Across the Spider-Verse",
        "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
        "popularity": 237.904,
        "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        "release_date": "2023-05-31",
        "title": "Spider-Man: Across the Spider-Verse",
        "video": false,
        "vote_average": 8.4,
        "vote_count": 6232
      },
      {
        "adult": false,
        "backdrop_path": "/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
        "genre_ids": [
          28,
          878,
          12
        ],
        "id": 27205,
        "original_language": "en",
        "original_title": "Inception",
        "overview": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
        "popularity": 395.877,
        "poster_path": "/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
        "release_date": "2010-07-15",
        "title": "Inception",
        "video": false,
        "vote_average": 8.368,
        "vote_count": 35673
      },
      {
        "adult": false,
        "backdrop_path": "/jBIMZ0AlUYuFNsKbd4L6FojWMoy.jpg",
        "genre_ids": [
          16,
          35,
          10749
        ],
        "id": 820067,
        "original_language": "ja",
        "original_title": "映画 五等分の花嫁",
        "overview": "When five lovely young girls who hate studying hire part-time tutor Futaro, he guides not only their education but also their hearts. Time spent has brought them all closer, with feelings growing within the girls and Futaro. As they finish their third year of high school and their last school festival approaches, they set their sights on what’s next. Is there a future with one of them and Futaro?",
        "popularity": 45.209,
        "poster_path": "/sg7klpt1xwK1IJirBI9EHaqQwJ5.jpg",
        "release_date": "2022-05-20",
        "title": "The Quintessential Quintuplets Movie",
        "video": false,
        "vote_average": 8.359,
        "vote_count": 355
      },
      {
        "adult": false,
        "backdrop_path": "/zGs5tZOlvc9cprdcU6kDOVNpujf.jpg",
        "genre_ids": [
          53,
          9648
        ],
        "id": 567,
        "original_language": "en",
        "original_title": "Rear Window",
        "overview": "A wheelchair-bound photographer spies on his neighbors from his apartment window and becomes convinced one of them has committed murder.",
        "popularity": 66.869,
        "poster_path": "/ILVF0eJxHMddjxeQhswFtpMtqx.jpg",
        "release_date": "1954-08-01",
        "title": "Rear Window",
        "video": false,
        "vote_average": 8.351,
        "vote_count": 6242
      },
      {
        "adult": false,
        "backdrop_path": "/aYcnDyLMnpKce1FOYUpZrXtgUye.jpg",
        "genre_ids": [
          80,
          18,
          53
        ],
        "id": 274,
        "original_language": "en",
        "original_title": "The Silence of the Lambs",
        "overview": "Clarice Starling is a top student at the FBI's training academy.  Jack Crawford wants Clarice to interview Dr. Hannibal Lecter, a brilliant psychiatrist who is also a violent psychopath, serving life behind bars for various acts of murder and cannibalism.  Crawford believes that Lecter may have insight into a case and that Starling, as an attractive young woman, may be just the bait to draw him out.",
        "popularity": 16.754,
        "poster_path": "/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
        "release_date": "1991-02-14",
        "title": "The Silence of the Lambs",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 15735
      },
      {
        "adult": false,
        "backdrop_path": "/6qHI1IYj7QlLSCwHRzkL62X175s.jpg",
        "genre_ids": [
          18
        ],
        "id": 73,
        "original_language": "en",
        "original_title": "American History X",
        "overview": "Derek Vineyard is paroled after serving 3 years in prison for killing two African-American men. Through his brother, Danny Vineyard's narration, we learn that before going to prison, Derek was a skinhead and the leader of a violent white supremacist gang that committed acts of racial crime throughout L.A. and his actions greatly influenced Danny. Reformed and fresh out of prison, Derek severs contact with the gang and becomes determined to keep Danny from going down the same violent path as he did.",
        "popularity": 82.987,
        "poster_path": "/euypWkaYFOLW3e5rLIcTAjWnhhT.jpg",
        "release_date": "1998-07-01",
        "title": "American History X",
        "video": false,
        "vote_average": 8.347,
        "vote_count": 11200
      },
      {
        "adult": false,
        "backdrop_path": "/gl0jzn4BupSbL2qMVeqrjKkF9Js.jpg",
        "genre_ids": [
          12,
          14,
          16
        ],
        "id": 128,
        "original_language": "ja",
        "original_title": "もののけ姫",
        "overview": "Ashitaka, a prince of the disappearing Emishi people, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.",
        "popularity": 74.447,
        "poster_path": "/cMYCDADoLKLbB83g4WnJegaZimC.jpg",
        "release_date": "1997-07-12",
        "title": "Princess Mononoke",
        "video": false,
        "vote_average": 8.34,
        "vote_count": 7673
      },
      {
        "adult": false,
        "backdrop_path": "/qknxyRgP6UTmwJ4B9tDAmzHMq7u.jpg",
        "genre_ids": [
          10749,
          16,
          14
        ],
        "id": 92321,
        "original_language": "ja",
        "original_title": "蛍火の杜へ",
        "overview": "One hot summer day a little girl gets lost in an enchanted forest of the mountain god where spirits reside. A young boy appears before her, but she cannot touch him for fear of making him disappear. And so a wondrous adventure awaits...",
        "popularity": 0.6,
        "poster_path": "/mDqzHV8UXWWNpZkoAbKmKX1ZxEE.jpg",
        "release_date": "2011-09-17",
        "title": "Hotarubi no Mori e",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 1066
      },
      {
        "adult": false,
        "backdrop_path": "/c8Pi8F1FzpNebtgXcSjC9nWCdSW.jpg",
        "genre_ids": [
          35,
          10752
        ],
        "id": 914,
        "original_language": "en",
        "original_title": "The Great Dictator",
        "overview": "Dictator Adenoid Hynkel tries to expand his empire while a poor Jewish barber tries to avoid persecution from Hynkel's regime.",
        "popularity": 93.881,
        "poster_path": "/1QpO9wo7JWecZ4NiBuu625FiY1j.jpg",
        "release_date": "1940-10-15",
        "title": "The Great Dictator",
        "video": false,
        "vote_average": 8.324,
        "vote_count": 3217
      },
      {
        "adult": false,
        "backdrop_path": "/1fOsyhVz5qyX2rl1qqX6KImVhTx.jpg",
        "genre_ids": [
          18,
          35
        ],
        "id": 644479,
        "original_language": "es",
        "original_title": "Dedicada A Mi Ex",
        "overview": "The film tells the story of Ariel, a 21-year-old who decides to form a rock band to compete for a prize of ten thousand dollars in a musical band contest, this as a last option when trying to get money to save their relationship and reunite with his ex-girlfriend, which breaks due to the trip she must make to Finland for an internship. Ariel with her friend Ortega, decides to make a casting to find the other members of the band, although they do not know nothing about music, thus forming a band with members that have diverse and opposite personalities.",
        "popularity": 8.737,
        "poster_path": "/xc4bTXVwYNXi10jG9dwcaYt5IpU.jpg",
        "release_date": "2019-11-01",
        "title": "Dedicated to my ex",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 494
      },
      {
        "adult": false,
        "backdrop_path": "/xLMJCCSatxENpHO9rLW9yD8A12C.jpg",
        "genre_ids": [
          16,
          878,
          28,
          18
        ],
        "id": 18491,
        "original_language": "ja",
        "original_title": "新世紀エヴァンゲリオン劇場版 Air／まごころを、君に",
        "overview": "Seele orders an all-out attack on NERV, aiming to destroy the Evas before Gendo can trigger Third Impact and Instrumentality under his control.",
        "popularity": 66.298,
        "poster_path": "/j6G24dqI4WgUtChhWjfnI4lnmiK.jpg",
        "release_date": "1997-07-19",
        "title": "Neon Genesis Evangelion: The End of Evangelion",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 1491
      },
      {
        "adult": false,
        "backdrop_path": "/5bzPWQ2dFUl2aZKkp7ILJVVkRed.jpg",
        "genre_ids": [
          12,
          35,
          878
        ],
        "id": 105,
        "original_language": "en",
        "original_title": "Back to the Future",
        "overview": "Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",
        "popularity": 115.3,
        "poster_path": "/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
        "release_date": "1985-07-03",
        "title": "Back to the Future",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 19259
      }
    ]
  }
  public router = inject(Router);
  public route = inject(ActivatedRoute)
  protected goToMovieDetails(movie: any) {
    this.router.navigate(['movies', movie.id], {relativeTo: this.route})
  }
}
