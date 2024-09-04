import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import moment from 'moment'
import { BehaviorSubject } from 'rxjs'
import { UnauthorizedDialogComponent } from '../components/shared/unauthorized-dialog/unauthorized-dialog.component'
import { DialogService } from './dialog.service'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly dialogService: DialogService = inject(DialogService);
  public readonly http: HttpClient = inject(HttpClient);

  protected readonly loggedUser$ = new BehaviorSubject<any>(null)
    // new BehaviorSubject<string>(textToColor(authService.user?.firstName))

  public get user() {
    if (!this.loggedIn) return null;
    if(!this.loggedUser$.value) {
      this.loggedUser$.next(JSON.parse(localStorage.getItem('user')));
    }
    return this.loggedUser$.value;
  }

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
    localStorage.setItem('user', JSON.stringify(response.user));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('expires');
    localStorage.removeItem('user');
    this.loggedUser$.next(null);
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
