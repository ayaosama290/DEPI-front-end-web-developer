import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { SignUp } from '../../Interfaces/sign-up';
import { GlobalService } from '../../services/global.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  model : SignUp = {
    first_name : '',
    last_name : '',
    email : '',
    phone : '',
    password : '',
    confirm_password : '',
  }
  constructor(private auth : AuthService) { }
  handleSubmit(form : NgForm){
    if(form.valid){
      this.auth.register(form).subscribe(res=>{
        console.log(res)
        if(res.status == 'Success'){
          console.log('success')
          // localStorage.setItem('userToken', res.data.token)
          // localStorage.setItem('userName', `${res.data.first_name} ${res.data.last_name}`)
          // this.global.isLogin = true
          // this.router.navigateByUrl('/')
        }
      })
      
    }
    
    // console.log(form.value)
  }
} 
