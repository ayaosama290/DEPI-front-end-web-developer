import { CanDeactivateFn } from '@angular/router';

export const canDeactivateGuard: CanDeactivateFn<unknown> = (component : any, currentRoute, currentState, nextState) => {
  // console.log(component)
  // console.log(currentRoute)
  // console.log(currentState)
  // console.log(nextState)

  console.log(component.loginForm.dirty)
  if(component.loginForm.dirty && component.isSubmitted == false){
    const cnfirm =confirm('are you sure you want to leave before saving changes')
    console.log(cnfirm)
    if (cnfirm){
      return true
    }
    else return false 
  }
  return true;
};
