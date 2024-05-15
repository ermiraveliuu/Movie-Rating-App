import { inject, Injectable } from '@angular/core'
import { UnauthorizedDialogComponent } from '../components/shared/unauthorized-dialog/unauthorized-dialog.component'
import { DialogService } from './dialog.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _loggedIn: boolean = false
  private readonly dialogService: DialogService = inject(DialogService)

  public get loggedIn() {
    return this._loggedIn
  }

  public toggle() {
    this._loggedIn = !this.loggedIn
  }

  isAuthorized(): boolean {
    if (!this.loggedIn) {
      this.dialogService
        .open(UnauthorizedDialogComponent, {
          label: '',
          size: 's',
        })
        .subscribe()
      return false
    }
    return true
  }
}
