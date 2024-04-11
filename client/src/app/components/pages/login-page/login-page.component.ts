import {Component} from "@angular/core";
import {TuiInputModule, TuiIslandModule} from "@taiga-ui/kit";
import {TextInputComponent} from "../../shared/inputs/text-input/text-input.component";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PasswordInputComponent} from "../../shared/inputs/password-input/password-input.component";

@Component({
  selector: 'login-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.scss'],
  standalone: true,
  imports: [
    TuiIslandModule,
    TuiInputModule,
    TextInputComponent,
    PasswordInputComponent
  ]
})
export class LoginPageComponent {

  private readonly form = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  protected get formControls() {
    return this.form.controls;
  }
}
