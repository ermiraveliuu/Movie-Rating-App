import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { NgIf, TitleCasePipe } from '@angular/common';
import { FormControlPipe } from '../../../../pipes/form-control.pipe';
import {
  TuiErrorModule,
  TuiLabelModule,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { ErrorComponent } from '../../error/error.component';

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
    TuiTextfieldControllerModule,
    ErrorComponent,
  ],
})
export class TextInputComponent {
  @Input() name!: string;
  @Input() control!: AbstractControl;
  protected readonly Validators = Validators;
}
