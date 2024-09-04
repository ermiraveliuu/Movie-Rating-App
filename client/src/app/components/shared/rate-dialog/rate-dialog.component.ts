import { Component, Inject } from '@angular/core'
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms'
import { TuiButtonModule, TuiDialogContext, TuiLabelModule } from '@taiga-ui/core'
import { TuiRatingModule } from '@taiga-ui/kit'
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus'
import { Subject } from 'rxjs'
import { AlertService } from '../../../services/alert.service'
import { ReviewsService } from '../../../services/reviews.service'
import { TextAreaInputComponent } from '../inputs/text-area-input/text-area-input.component'

@Component({
  selector: 'rate-dialog',
  templateUrl: 'rate-dialog.component.html',
  styleUrls: ['rate-dialog.component.scss'],
  standalone: true,
  imports: [TuiRatingModule, FormsModule, TuiLabelModule, ReactiveFormsModule, TextAreaInputComponent, TuiButtonModule],
})
export class RateDialogComponent {
  protected review;
  protected movieId;
  protected editMode;

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<any, any>,
    private reviewsService: ReviewsService,
    private alertService: AlertService,
  ) {
    this.review = this.context.data.review;
    this.movieId = this.context.data.movieId;
    this.editMode = !!this.review;
    if (this.editMode) {
      this.form.patchValue(this.review);
    }
  }

  protected readonly form = new FormGroup({
    rating: new FormControl(null, [Validators.required]),
    comment: new FormControl(null),
  })

  delete() {
    this.reviewsService.deleteReview(this.review._id, this.movieId).subscribe({
      next: () => {
        this.alertService.showSuccessMessage('Review deleted successfully.');
        this.context.completeWith(1);
      }
    })
  }

  save() {
    if (this.editMode) {
      this.reviewsService.edit(this.review._id, this.movieId, this.form.value.rating, this.form.value.comment).subscribe({
        next: () => {
          this.alertService.showSuccessMessage('Review updated successfully.');
          this.context.completeWith(1);
        }
      })
    } else {
      this.reviewsService.addReview(this.movieId, this.form.value.rating, this.form.value.comment).subscribe({
        next: () => {
          this.alertService.showSuccessMessage('Review added successfully.');
          this.context.completeWith(1);
        }
      })
    }

  }

  cancel() {
    this.context.completeWith(null);
  }
}
