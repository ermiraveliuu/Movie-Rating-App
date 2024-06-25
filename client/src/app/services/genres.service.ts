import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ApiResponse } from '../models/api-response'
import { Genre } from '../models/genre.model'
import { BaseService } from './base-service'

@Injectable({
  providedIn: 'root',
})
export class GenresService extends BaseService {

  constructor() {
    super();
    this.setBasePath('genres')
  }

  getGenres(): Observable<ApiResponse<Genre>> {
    return this.http.get<ApiResponse<Genre>>(this.basePath)
  }
}
