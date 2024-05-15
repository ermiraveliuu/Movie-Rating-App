import { Component, inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { RouterLink } from '@angular/router'
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core'
import { TuiInputModule, TuiIslandModule } from '@taiga-ui/kit'
import { AuthService } from '../../../services/auth.service'
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
  private readonly authService = inject(AuthService)

  protected get formControls() {
    return this.form.controls
  }

  login() {
    this.authService.toggle()
    console.log(this.form.value)
  }
}
