import { HttpClient } from '@angular/common/http'
import { Component, inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { Router, RouterLink } from '@angular/router'
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core'
import { TuiIslandModule } from '@taiga-ui/kit'
import { iif } from 'rxjs'
import { AlertService } from '../../../services/alert.service'
import { AuthService, LoginInfo } from '../../../services/auth.service'
import { PasswordInputComponent } from '../../shared/inputs/password-input/password-input.component'
import { TextInputComponent } from '../../shared/inputs/text-input/text-input.component'

@Component({
  selector: 'signup-page',
  templateUrl: 'signup-page.component.html',
  styleUrls: ['signup-page.component.scss'],
  standalone: true,
  imports: [PasswordInputComponent, TextInputComponent, TuiButtonModule, TuiIslandModule, TuiLinkModule, RouterLink],
})
export class SignupPageComponent {
  private readonly form = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    //TODO: add email pattern validator
    email: new FormControl(null, [Validators.required]),
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  })
  private readonly authService = inject(AuthService)
  private readonly alertService = inject(AlertService)
  private readonly router = inject(Router)

  protected get formControls() {
    return this.form.controls
  }

  signup() {
    this.authService.signup(this.form.value).subscribe({
      next: res => this.onSuccessfulSignup(),
      error: res => this.alertService.showMessage(res.error.message, 'error')
      })
  }

  onSuccessfulSignup() {
    const loginInfo = {
      username: this.form.value.username,
      password: this.form.value.password,
    }
    this.authService.login(loginInfo).subscribe({
      next: res => {
        this.authService.setLocalStorage(res)
        this.router.navigate(['/'])
      },
      error: res => {
        this.alertService.showMessage(res.error.message, 'error')
      },
    })
  }
}
