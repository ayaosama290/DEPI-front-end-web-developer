import { HttpInterceptorFn } from '@angular/common/http';

export const loginInterceptor: HttpInterceptorFn = (req, next) => {
  let token = localStorage.getItem('userToken')
  if (token){
    req = req.clone({
      headers : req.headers.set('Authorization', `Bearer ${token}`)
    })
  }
  return next(req);
};
