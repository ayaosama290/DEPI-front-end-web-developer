import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  userData : any
  isDisabled : boolean = true
  personalDataForm = new FormGroup({
    customer_first_name : new FormControl(),
    customer_last_name : new FormControl(),
    customer_email: new FormControl([{value: '', disabled: this.isDisabled}, Validators.required]),
    customer_phone : new FormControl()
  })
  constructor(private auth: AuthService) {
    this.auth.getUserProfile().subscribe(res=>{
      this.userData = res.data
      // this.personalDataForm.controls.customer_first_name = this.userData.customer_first_name
      this.personalDataForm.patchValue(this.userData)
      this.personalDataForm.controls['customer_email'].disable()
      console.log( res)
    })
  }
  handleProfile(){
    this.auth.getUserProfile().subscribe(res=>{
      this.userData = res.data
      // this.personalDataForm.controls.customer_first_name = res.data.customer_first_name
      console.log(res)
    })
  }
}
