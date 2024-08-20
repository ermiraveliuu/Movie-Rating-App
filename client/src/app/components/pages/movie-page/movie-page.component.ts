import { DatePipe, JsonPipe, NgForOf, NgIf } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { TuiHintModule, TuiScrollbarModule, TuiSvgModule } from '@taiga-ui/core'
import {
  tuiIconBookmark,
  tuiIconBookmarkLarge,
  tuiIconHeart,
  tuiIconHeartLarge,
  tuiIconStar,
  tuiIconStarLarge,
} from '@taiga-ui/icons'
import { TuiRatingModule, TuiTagModule } from '@taiga-ui/kit'
import { mergeMap } from 'rxjs'
import { SetBackgroundImageDirective } from '../../../directives/set-background-image.directive'
import { AlertService } from '../../../services/alert.service'
import { MoviesService } from '../../../services/movies.service'
import { WishlistService } from '../../../services/wishlist.service'
import { HeaderComponent } from '../../shared/header/header.component'
import { MovieCardComponent } from '../../shared/movie-card/movie-card.component'

@Component({
  selector: 'movie-page',
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
    DatePipe,
    TuiScrollbarModule,
    HeaderComponent,
  ],
})
export class MoviePageComponent implements OnInit {

  movie: any
  private route = inject(ActivatedRoute)
  private moviesService = inject(MoviesService)
  private wishlistService = inject(WishlistService);
  private alertService = inject(AlertService);

  ngOnInit() {
    const movieId = this.route.snapshot.params['id'];
    this.moviesService.getMovie(movieId).subscribe({
      next: (movie) =>  this.movie = movie
    })
  }

  protected round(rating: number) {
    return rating?.toFixed(1)
  }

  addToWishlist() {
    this.wishlistService.addToWishlist(this.movie._id).pipe(
      mergeMap(() => this.moviesService.getMovie(this.movie._id))
    ).subscribe({
      next: (movie) => {
        this.movie = movie;
        this.alertService.showSuccessMessage();
      }
    });

  }

  removeFromWishlist() {
    this.wishlistService.removeFromWishlist(this.movie._id).pipe(
      mergeMap(() => this.moviesService.getMovie(this.movie._id))
    ).subscribe({
      next: (movie) =>  {
        this.movie = movie;
        this.alertService.showSuccessMessage();
      }
    });
  }

  protected readonly tuiIconStar = tuiIconStar
  protected readonly tuiIconStarLarge = tuiIconStarLarge
  protected readonly tuiIconBookmarkLarge = tuiIconBookmarkLarge
  protected readonly tuiIconHeartLarge = tuiIconHeartLarge
}
