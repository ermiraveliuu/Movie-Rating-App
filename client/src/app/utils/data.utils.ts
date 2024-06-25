import { HttpParams } from '@angular/common/http';

export const defineHttpParams = (params: object): HttpParams => {
  let httpParams: HttpParams = new HttpParams();

  Object.keys(params).forEach((param) => {
    if (params[param]) {
      httpParams = httpParams.set(param, params[param]);
    }
  });
  return httpParams;
};
