import { HttpClient, HttpParams } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ApiResponse } from '../models/api-response'
import { Movie } from '../models/movie.model'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public readonly http: HttpClient = inject(HttpClient);

  getMovies(page?: number, genreIds?: string[], languageIds?: string[]): Observable<ApiResponse<Movie>> {
    let params = new HttpParams().append('page',page ?? 1);
    if(genreIds){
      params = params.append('genreIds', genreIds.join(','));
    }
    if(languageIds){
      params = params.append('languageIds', languageIds.join(','));
    }
    return this.http.get<ApiResponse<Movie>>(`/movies`, { params })
  }

  getMovie(movieId?: string) {
    return this.http.get<any>(`/movies/${movieId}`)
  }
}
