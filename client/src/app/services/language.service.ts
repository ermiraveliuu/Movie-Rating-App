import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { ApiResponse } from '../models/api-response'
import { Language } from '../models/language.model'
import { BaseService } from './base-service'

@Injectable({
  providedIn: 'root',
})
export class LanguageService extends BaseService {

  constructor() {
    super();
    this.setBasePath('languages')
  }

  getLanguages(): Observable<ApiResponse<Language>> {
    return this.http.get<ApiResponse<Language>>(this.basePath)
  }
}
