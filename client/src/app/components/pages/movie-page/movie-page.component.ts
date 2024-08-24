import { DatePipe, JsonPipe, NgForOf, NgIf } from '@angular/common'
import { Component, inject, OnInit } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { TuiHintModule, TuiScrollbarModule, TuiSvgModule, TuiTextfieldControllerModule } from '@taiga-ui/core'
import {
  tuiIconBookmark,
  tuiIconBookmarkLarge,
  tuiIconHeart,
  tuiIconHeartLarge,
  tuiIconStar,
  tuiIconStarLarge,
} from '@taiga-ui/icons'
import { TuiAvatarModule, TuiIslandModule, TuiLineClampModule, TuiRatingModule, TuiTagModule } from '@taiga-ui/kit'
import { filter, mergeMap, tap } from 'rxjs'
import { SetBackgroundImageDirective } from '../../../directives/set-background-image.directive'
import { AvatarColorPipe } from '../../../pipes/avatar-color.pipe'
import { AlertService } from '../../../services/alert.service'
import { DialogService } from '../../../services/dialog.service'
import { MoviesService } from '../../../services/movies.service'
import { ReviewsService } from '../../../services/reviews.service'
import { WishlistService } from '../../../services/wishlist.service'
import { HeaderComponent } from '../../shared/header/header.component'
import { MovieCardComponent } from '../../shared/movie-card/movie-card.component'
import { RateDialogComponent } from '../../shared/rate-dialog/rate-dialog.component'

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
    TuiLineClampModule,
    AvatarColorPipe,
    TuiAvatarModule,
    TuiTextfieldControllerModule,
    TuiIslandModule,
  ],
})
export class MoviePageComponent implements OnInit {
  movie: any
  reviews: any
  private route = inject(ActivatedRoute)
  private moviesService = inject(MoviesService)
  private wishlistService = inject(WishlistService)
  private reviewsService = inject(ReviewsService)
  private alertService = inject(AlertService)
  private dialogService = inject(DialogService)

  ngOnInit() {
    const movieId = this.route.snapshot.params['id']
    this.moviesService.getMovie(movieId).subscribe({
      next: movie => (this.movie = movie),
    })

    this.reviewsService.getMovieReviews(movieId).subscribe({
      next: reviews => (this.reviews = reviews),
    })
  }

  protected round(rating: number) {
    return rating?.toFixed(1)
  }

  addToWishlist() {
    this.movie.isInWishlist = true;
    this.wishlistService
      .addToWishlist(this.movie._id)
      .pipe(mergeMap(() => this.moviesService.getMovie(this.movie._id)))
      .subscribe({
        next: movie => {
          this.movie = movie
          this.alertService.showSuccessMessage('Movie added to watchlist successfully!')
        },
      })
  }

  removeFromWishlist() {
    this.movie.isInWishlist = false;
    this.wishlistService
      .removeFromWishlist(this.movie._id)
      .pipe(mergeMap(() => this.moviesService.getMovie(this.movie._id)))
      .subscribe({
        next: movie => {
          this.movie = movie
          this.alertService.showSuccessMessage('Movie removed from watchlist successfully!')
        },
      })
  }

  openRatingDialog() {
    this.dialogService
      .open(RateDialogComponent, {
        label: 'Rate Movie',
        data: {
          review: this.movie.review,
          movieId: this.movie._id,
        },
      })
      .pipe(
        mergeMap(() => this.reviewsService.getMovieReviews(this.movie._id)),
        tap(reviews => (this.reviews = reviews)),
        mergeMap(() => this.moviesService.getMovie(this.movie._id)),
      )
      .subscribe({
        next: movie => {
          this.movie = movie
        },
      })
  }

  protected readonly tuiIconStar = tuiIconStar
  protected readonly tuiIconStarLarge = tuiIconStarLarge
  protected readonly tuiIconBookmarkLarge = tuiIconBookmarkLarge
}
