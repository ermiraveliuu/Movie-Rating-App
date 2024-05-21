import { HttpClient } from '@angular/common/http'
import { Component, inject } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { RouterLink } from '@angular/router'
import { TuiButtonModule, TuiLinkModule } from '@taiga-ui/core'
import { TuiIslandModule } from '@taiga-ui/kit'
import { PasswordInputComponent } from '../../shared/inputs/password-input/password-input.component'
import { TextInputComponent } from '../../shared/inputs/text-input/text-input.component'

@Component({
  selector: 'signup-page',
  templateUrl: 'signup-page.component.html',
  styleUrls: ['signup-page.component.scss'],
  standalone: true,
  imports: [
    PasswordInputComponent,
    TextInputComponent,
    TuiButtonModule,
    TuiIslandModule,
    TuiLinkModule,
    RouterLink,
  ],
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

  private readonly http = inject(HttpClient);


  protected get formControls() {
    return this.form.controls
  }

  signup() {
    console.log(1)
    this.http.post('http://localhost:3000/api/v1/auth/register', this.form.value).subscribe(console.log)

    console.log(this.form.value)
  }
}
