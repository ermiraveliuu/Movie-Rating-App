import { Component, OnInit, inject, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterLink } from '@angular/router'
import { TuiLabelModule, TuiScrollbarModule, TuiSvgModule } from '@taiga-ui/core'
import { tuiIconBookmarkLarge, tuiIconStar, tuiIconStarLarge } from '@taiga-ui/icons'
import { TuiAvatarModule, TuiIslandModule, TuiRatingModule, TuiTabsModule } from '@taiga-ui/kit'
import { AvatarColorPipe } from '../../../pipes/avatar-color.pipe'
import { AuthService } from '../../../services/auth.service'
import { ReviewsService } from '../../../services/reviews.service'
import { WishlistService } from '../../../services/wishlist.service'
import { HeaderComponent } from '../../shared/header/header.component'
import { MovieCardComponent } from '../../shared/movie-card/movie-card.component'

@Component({
  templateUrl: 'user-page.component.html',
  styleUrls: ['user-page.component.scss'],
  standalone: true,
  imports: [
    HeaderComponent,
    TuiAvatarModule,
    AvatarColorPipe,
    TuiIslandModule,
    TuiSvgModule,
    MovieCardComponent,
    TuiTabsModule,
    RouterLink,
    TuiScrollbarModule,
    TuiLabelModule,
    TuiRatingModule,
    FormsModule,
  ],
})
export class UserPageComponent implements OnInit {
  protected readonly authService = inject(AuthService)
  protected readonly wishlistService = inject(WishlistService)
  protected readonly reviewsService = inject(ReviewsService)
  protected readonly tuiIconBookmarkLarge = tuiIconBookmarkLarge

  protected readonly user = this.authService.user
  protected readonly wishlist = signal<any>(null)
  protected readonly reviews = signal<any>(null)
  protected index = 0

  ngOnInit() {
    this.wishlistService.getUserWishlist().subscribe({
      next: wishlist => this.wishlist.set(wishlist),
    })

    this.reviewsService.getUserReviews(this.user._id).subscribe({
      next: reviews => this.reviews.set(reviews),
    })
  }

  protected readonly tuiIconStarLarge = tuiIconStarLarge
  protected readonly tuiIconStar = tuiIconStar
}
