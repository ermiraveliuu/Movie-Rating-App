import {Component, inject, Input} from "@angular/core";
import {TuiIslandModule, TuiLineClampModule, TuiRatingModule} from "@taiga-ui/kit";
import {tuiIconStar} from "@taiga-ui/icons";
import {TuiButtonModule, TuiSvgModule} from "@taiga-ui/core";
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {DialogService} from "../../../services/dialog.service";
import {UnauthorizedDialogComponent} from "../unauthorized-dialog/unauthorized-dialog.component";

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
    TuiButtonModule
  ]
})
export class MovieCardComponent {

  @Input() movie: any;

  protected readonly tuiIconStar = tuiIconStar;
  protected readonly authService = inject(AuthService)
  protected readonly dialogService = inject(DialogService)
  protected round(rating: number) {
    return rating.toFixed(1)
  }

  protected rate(event: MouseEvent, movie:any) {
    event.stopPropagation();
    if(!this.authService.loggedIn) {
      this.dialogService.open(UnauthorizedDialogComponent, {label: '', size: 's'}).subscribe()
      return;
    }
    console.log('rate');
  }
  protected addToWishlist(movie:any) {

  }

}
