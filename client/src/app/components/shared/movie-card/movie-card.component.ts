import { DatePipe, NgIf } from '@angular/common'
import { Component, inject, Input } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { TuiButtonModule, TuiSvgModule } from '@taiga-ui/core'
import { tuiIconStar } from '@taiga-ui/icons'
import {
  TuiIslandModule,
  TuiLineClampModule,
  TuiRatingModule, TuiTagModule,
} from '@taiga-ui/kit'

@Component({
  selector: 'movie-card',
  templateUrl: 'movie-card.component.html',
  styleUrls: ['movie-card.component.scss'],
  standalone: true,
  imports: [TuiIslandModule, TuiSvgModule, TuiRatingModule, FormsModule, TuiLineClampModule, TuiButtonModule, TuiTagModule, DatePipe, NgIf],
})
export class MovieCardComponent {
  @Input() movie: any

  protected readonly tuiIconStar = tuiIconStar

  protected round(rating: number) {
    return rating?.toFixed(1)
  }
}
