import { Component, inject } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'unauthorized-dialog',
  templateUrl: 'unauthorized-dialog.component.html',
  styleUrls: ['unauthorized-dialog.component.scss'],
  standalone: true,
  imports: [TuiButtonModule],
})
export class UnauthorizedDialogComponent {
  public router = inject(Router);
  public route = inject(ActivatedRoute);

  goToLogin() {
    this.router.navigate(['login'], { relativeTo: this.route });
  }
}
