import { HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { Observable } from 'rxjs'
import { Wishlist } from '../models/wishlist.model'
import { AuthService } from './auth.service'
import { BaseService } from './base-service'

@Injectable({
  providedIn: 'root',
})
export class WishlistService extends BaseService {

  protected readonly authService = inject(AuthService);

  constructor() {
    super();
    this.setBasePath('wishlist')
  }

  getUserWishlist(): Observable<Wishlist> {
    let params = new HttpParams();
    const userId = this.authService.user?._id;
    console.log(userId);
    if(userId) {
      params = new HttpParams().append('userId', userId);
    }
    return this.http.get<Wishlist>(this.basePath, { params })
  }

  addToWishlist(movieId): Observable<Wishlist> {
    return this.http.post<Wishlist>(`${this.basePath}/add`, {movieId, userId: this.authService.user._id})
  }

  removeFromWishlist(movieId): Observable<Wishlist> {
    return this.http.post<Wishlist>(`${this.basePath}/remove`, {movieId, userId: this.authService.user._id})
  }
}
