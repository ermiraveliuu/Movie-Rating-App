import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http'
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
  private readonly authService = inject(AuthService);
  private readonly http = inject(HttpClient);

  protected get formControls() {
    return this.form.controls
  }

  login() {
    this.http.post('http://localhost:3000/api/v1/auth/login', this.form.value).subscribe((res:any) => {
      localStorage.setItem('token', res.token );
      const token = localStorage.getItem('token' ) ?? ''
      console.log(token)
      let headers = new HttpHeaders().set('Authorization', token)
      this.http.get('http://localhost:3000/api/v1/auth/protected', { headers }).subscribe(console.log)
    })

    // this.authService.toggle()
    // console.log(this.form.value)
  }

}
