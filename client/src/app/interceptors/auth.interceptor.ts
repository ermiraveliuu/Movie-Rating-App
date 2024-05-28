import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'

export function authInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authToken = localStorage.getItem('token');
  const request = req.clone({
    url: 'http://localhost:3001/api/v1' + req.url,
  });
  if (authToken) {
    const authReq = request.clone({
      url: 'http://localhost:3001/api/v1' + req.url,
      setHeaders: {
        Authorization: `${authToken}`,
      }
    });
    return next(authReq);
  }
  return next(request);
}
