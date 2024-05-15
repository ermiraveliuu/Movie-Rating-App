import { Component, inject, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core'
import { tuiIconStar } from '@taiga-ui/icons'
import {
  TuiIslandModule,
  TuiLineClampModule,
  TuiRatingModule,
} from '@taiga-ui/kit'
import { AuthService } from '../../../services/auth.service'
import { DialogService } from '../../../services/dialog.service'

@Component({
  selector: 'movie-card',
  templateUrl: 'movie-card.component.html',
  styleUrls: ['movie-card.component.scss'],
  standalone: true,
  imports: [
    TuiIslandModule,
    TuiSvgModule,
    TuiRatingModule,
    FormsModule,
    TuiLineClampModule,
    TuiButtonModule,
  ],
})
export class MovieCardComponent {
  @Input() movie: any

  protected readonly tuiIconStar = tuiIconStar
  protected readonly authService = inject(AuthService)
  protected readonly dialogService = inject(DialogService)
  protected round(rating: number) {
    return rating.toFixed(1)
  }

  protected rate(event: MouseEvent, movie: any) {
    event.stopPropagation()
    if (this.authService.isAuthorized()) {
      console.log('rate')
    }
  }
  protected addToWishlist(event: MouseEvent, movie: any) {
    event.stopPropagation()
    if (this.authService.isAuthorized()) {
      console.log('wishlist')
    }
  }
}
