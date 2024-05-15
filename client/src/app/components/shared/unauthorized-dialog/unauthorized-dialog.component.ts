import { Component, Inject, inject } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { TuiButtonModule, TuiDialogContext } from '@taiga-ui/core'
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus'

@Component({
  selector: 'unauthorized-dialog',
  templateUrl: 'unauthorized-dialog.component.html',
  styleUrls: ['unauthorized-dialog.component.scss'],
  standalone: true,
  imports: [TuiButtonModule],
})
export class UnauthorizedDialogComponent {
  public router = inject(Router)
  public route = inject(ActivatedRoute)

  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<any, any>,
  ) {}

  goToLogin() {
    this.close()
    this.router.navigate(['login'], { relativeTo: this.route })
  }

  close() {
    this.context.completeWith(null)
  }
}
