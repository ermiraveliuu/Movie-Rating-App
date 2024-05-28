import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import moment from 'moment'
import { UnauthorizedDialogComponent } from '../components/shared/unauthorized-dialog/unauthorized-dialog.component'
import { DialogService } from './dialog.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly dialogService: DialogService = inject(DialogService);
  public readonly http: HttpClient = inject(HttpClient);

  public get loggedIn() {
    const expiration = localStorage.getItem('expires');
    if(!expiration) return false;
    const expiresAt = JSON.parse(expiration);
    const date = moment().date()
    return moment(date).isBefore(expiresAt);
  }

  public setLocalStorage(response) {
    const expires = moment().add(response.expiresIn)
    localStorage.setItem('token', response.token);
    localStorage.setItem('expires', JSON.stringify(expires.valueOf()));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
  }

  login(info: any) {
    return this.http.post('/auth/login', info);
  }

  signup(info: any) {
   return this.http.post('/auth/register', info)
  }


  isAuthorized(): boolean {
    if (!this.loggedIn) {
      this.dialogService
        .open(UnauthorizedDialogComponent, {
          label: 'Unauthorized',
          size: 's',
        })
        .subscribe()
      return false
    }
    return true
  }
}

export interface LoginInfo {
  username: string;
  password: string;
}
