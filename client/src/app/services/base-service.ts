import { HttpClient, HttpParams } from '@angular/common/http'
import { Injectable, inject } from '@angular/core'

@Injectable({providedIn: 'root'})
export class BaseService {
  protected http = inject(HttpClient);
  protected basePath: string = '';

  setBasePath(path: string): void {
    this.basePath = '/' + path;
  }
}


