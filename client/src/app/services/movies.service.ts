import { HttpClient, HttpParams } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ApiResponse } from '../models/api-response'
import { Movie } from '../models/movie.model'
import { AuthService } from './auth.service'
import { BaseService } from './base-service'

@Injectable({
  providedIn: 'root',
})
export class MoviesService extends BaseService {
  public readonly authService = inject(AuthService);

  getMovies(_params: MovieParams): Observable<ApiResponse<Movie>> {
    const { page, genreIds, languageIds, searchValue } = _params
    let params = new HttpParams().append('page',page ?? 1);

    if(searchValue){
      params = params.append('q', searchValue);
    }

    if(genreIds){
      params = params.append('genreIds', genreIds.join(','));
    }

    if(languageIds){
      params = params.append('languageIds', languageIds.join(','));
    }

    return this.http.get<ApiResponse<Movie>>(`/movies`, { params })
  }

  getMovie(movieId: string) {
    let params = new HttpParams();
    const userId = this.authService.user?._id;
    if(userId) {
      params = new HttpParams().append('userId', userId);
    }
    return this.http.get<Movie>(`/movies/${movieId}`, { params })
  }
}

export interface MovieParams {
  page: number;
  searchValue?: string;
  genreIds?: string[],
  languageIds?: string[]
}
