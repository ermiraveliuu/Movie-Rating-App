import {Component, Input} from "@angular/core";
import {AbstractControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {TuiInputModule} from "@taiga-ui/kit";
import {NgIf, TitleCasePipe} from "@angular/common";
import {FormControlPipe} from "../../../../pipes/formControl.pipe";
import {TuiErrorModule, TuiLabelModule, TuiTextfieldControllerModule} from "@taiga-ui/core";

@Component({
  selector: 'text-input',
  templateUrl: 'text-input.component.html',
  styleUrls: ['text-input.component.scss'],
  standalone: true,
  imports: [
    TuiInputModule,
    TitleCasePipe,
    ReactiveFormsModule,
    FormControlPipe,
    TuiLabelModule,
    TuiErrorModule,
    NgIf,
    TuiTextfieldControllerModule
  ]
})
export class TextInputComponent {
  @Input() name!: string;
  @Input() control!: AbstractControl;
  protected readonly Validators = Validators;
}
