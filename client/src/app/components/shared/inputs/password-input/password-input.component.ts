import {Component, Input} from "@angular/core";
import {AbstractControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {TuiInputModule, TuiInputPasswordModule} from "@taiga-ui/kit";
import {NgIf, TitleCasePipe} from "@angular/common";
import {FormControlPipe} from "../../../../pipes/formControl.pipe";
import {TuiErrorModule, TuiLabelModule, TuiTextfieldControllerModule} from "@taiga-ui/core";

@Component({
  selector: 'password-input',
  templateUrl: 'password-input.component.html',
  styleUrls: ['password-input.component.scss'],
  standalone: true,
  imports: [
    TuiInputModule,
    TitleCasePipe,
    ReactiveFormsModule,
    FormControlPipe,
    TuiLabelModule,
    TuiErrorModule,
    NgIf,
    TuiTextfieldControllerModule,
    TuiInputPasswordModule
  ]
})
export class PasswordInputComponent {
  @Input() name!: string;
  @Input() control!: AbstractControl;
  protected readonly Validators = Validators;
}
