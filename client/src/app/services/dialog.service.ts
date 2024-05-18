import { Inject, Injectable } from '@angular/core'
import { TuiDialogService, TuiDialogSize } from '@taiga-ui/core'
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus'

@Injectable({ providedIn: 'root' })
export class DialogService {
  constructor(
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
  ) {}

  open(component: any, options: Options) {
    return this.dialogs.open(new PolymorpheusComponent(component), {
      ...options,
      size: options.size ?? 'm',
    })
  }
}

interface Options {
  size?: TuiDialogSize;
  label?: string;
}
