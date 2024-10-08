import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  let token = localStorage.getItem('userToken')
  if(!token){
    router.navigateByUrl('/')
  }
  return true;
};
