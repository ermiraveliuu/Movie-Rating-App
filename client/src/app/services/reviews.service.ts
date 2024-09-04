import { HttpParams } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { AuthService } from './auth.service'
import { BaseService } from './base-service'

@Injectable({
  providedIn: 'root',
})
export class ReviewsService extends BaseService {
  protected readonly authService = inject(AuthService)

  constructor() {
    super()
    this.setBasePath('reviews')
  }

  addReview(movieId: string, rating: number, comment?: string): Observable<any> {
    return this.http.post<any>(`${this.basePath}/add`, { movieId, userId: this.authService.user._id, comment, rating })
  }

  edit(reviewId, movieId: string, rating: number, comment?: string): Observable<any> {
    const params = new HttpParams().append('movieId', movieId);
    return this.http.put<any>(`${this.basePath}/${reviewId}`, { userId: this.authService.user._id, comment, rating }, { params })
  }

  getMovieReviews(movieId: string) {
    const params = new HttpParams().append('movieId', movieId);
    return this.http.get<any>(`${this.basePath}`, {params})
  }

  getUserReviews(userId: string) {
    const params = new HttpParams().append('userId', userId);
    return this.http.get<any>(`${this.basePath}`, {params})
  }

  deleteReview(reviewId: string, movieId: string) {
    const params = new HttpParams().append('movieId', movieId);
    return this.http.delete<any>(`${this.basePath}/${reviewId}`, { params })
  }
}
