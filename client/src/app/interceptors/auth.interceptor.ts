import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpRequest } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('token');
    const request = req.clone({
      url: 'http://localhost:3000/api/v1' + req.url,
    });
    if (authToken) {
      const authReq = request.clone({
        url: 'http://localhost:3000/api/v1' + req.url,
        setHeaders: {
          Authorization: `${authToken}`,
        }
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}


export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authToken = localStorage.getItem('token');
  const request = req.clone({
    url: 'http://localhost:3000/api/v1' + req.url,
  });
  if (authToken) {
    const authReq = request.clone({
      url: 'http://localhost:3000/api/v1' + req.url,
      setHeaders: {
        Authorization: `${authToken}`,
      }
    });
    return next(authReq);
  }
  return next(req);
}
