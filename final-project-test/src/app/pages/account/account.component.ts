import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  constructor(private auth: AuthService) { }
  handleProfile(){
    this.auth.getUserProfile().subscribe(res=>{
      console.log(res)
    })
  }
}
