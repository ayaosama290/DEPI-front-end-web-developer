import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  loginForm = new FormGroup({
    email : new FormControl("",[Validators.required, Validators.email]),
    password : new FormControl(null,[Validators.required])// Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}')])
  })

  isSubmitted = false
  get userData(){return this.loginForm.controls}
  errorMsg = null
  
  constructor (private auth: AuthService , private router : Router, private global : GlobalService){ }
  handleSubmit(){
    this.isSubmitted = true
    //subscribe ==> response, error, completed
    if (this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe(res=>
      {
        if(res.status == 'Success'){
          console.log('success')
          localStorage.setItem('userToken', res.data.token)
          localStorage.setItem('userName', res.data.first_name)
          // localStorage.setItem('userName', `${res.data.first_name} ${res.data.last_name}`)
          this.global.isLogin = true
          this.router.navigateByUrl('/')
        }
      },(err)=>{
        // console.log(err.error.message)
        this.errorMsg = err.error.message
      },()=>{

      })
      // console.log(this.loginForm)
    }  
  }
}
