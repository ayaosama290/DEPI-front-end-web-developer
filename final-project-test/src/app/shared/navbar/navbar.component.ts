import { Component } from '@angular/core';
import {faHeart, faCartShopping, faUser} from '@fortawesome/free-solid-svg-icons'
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  faHeart = faHeart
  faCartShopping = faCartShopping
  faUser = faUser
  constructor(public global : GlobalService) { }
  
  handleLogout(){
    localStorage.removeItem('userToken')
    localStorage.removeItem('userName')
    this.global.isLogin = false
  }
}
