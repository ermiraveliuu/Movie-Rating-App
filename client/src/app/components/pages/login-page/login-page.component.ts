import { Component, inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router, RouterLink } from '@angular/router'
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core'
import { TuiInputModule, TuiIslandModule } from '@taiga-ui/kit'
import { AlertService } from '../../../services/alert.service'
import { AuthService, LoginInfo } from '../../../services/auth.service'
import { PasswordInputComponent } from '../../shared/inputs/password-input/password-input.component'
import { TextInputComponent } from '../../shared/inputs/text-input/text-input.component'

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.scss'],
  standalone: true,
  imports: [TuiIslandModule, TuiInputModule, TextInputComponent, PasswordInputComponent, TuiButtonModule, TuiLinkModule, RouterLink],
})
export class LoginPageComponent {
  private readonly form = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  })
  private readonly authService = inject(AuthService);
  private readonly alertService = inject(AlertService);

  private readonly router = inject(Router);

  protected get formControls() {
    return this.form.controls
  }

  login() {
    if(this.form.value.username && this.form.value.password) {
      const loginInfo: LoginInfo = {
        username: this.form.value.username,
        password: this.form.value.password
      }
      this.authService.login(loginInfo).subscribe( {
          next: (res) => {
            this.authService.setLocalStorage(res);
            this.router.navigate(['/'])
          },
        error: (res) => {
            this.alertService.showMessage(res.error.message, 'error');
        }
      })

    }
  }

}
