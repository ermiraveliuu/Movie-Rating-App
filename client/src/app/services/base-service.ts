import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'
import { SearchPaginationParams } from '../models/search-pagination-params.model'
import { defineHttpParams } from '../utils/data.utils'

@Injectable({providedIn: 'root'})
export class BaseService {
  protected http = inject(HttpClient);
  protected basePath: string = '';

  setBasePath(path: string): void {
    this.basePath = '/' + path;
  }

  protected getBaseSearchAndFilterParams(params: SearchPaginationParams): HttpParams {
    return defineHttpParams({
      q: params.searchValue,
      page: params.page,
      limit: params.limit
    });
  }
}


