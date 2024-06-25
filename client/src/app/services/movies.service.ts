import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  public readonly http: HttpClient = inject(HttpClient);

  getMovies() {
    return this.http.get('/movies/')
  }
}
