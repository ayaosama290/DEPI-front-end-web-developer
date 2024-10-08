import { Component } from '@angular/core';
import {faAdd} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrl: './addresses.component.css'
})
export class AddressesComponent {
  faAdd = faAdd
}
