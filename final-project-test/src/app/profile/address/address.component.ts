import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.css'
})
export class AddressComponent {
  countries : any
  governorates : any = []
  cities : any = []

  addressForm = new FormGroup({
        country_id : new FormControl(),
        state_id : new FormControl(),
        city_id : new FormControl(),
        suburb : new FormControl(),
        street_address : new FormControl(),
        building_number : new FormControl(),
        floor_number : new FormControl(),
        flat_number : new FormControl(),
        phone : new FormControl(),
  })

  constructor(private global : GlobalService){
    this.global.getCountries().subscribe(res=>{
      this.countries = res.data
      // console.log(res)
    })

    // this.addressForm.controls['country_id'].valueChanges.subscribe(res=>{
    //   console.log(res)
    //   if (!res){
    //     this.handleClear()
    //   }
    // })
  }
  stateGovernorate= true
  handleGovernorate(eve : any){
      //  console.log(eve)
      //  console.log(this.addressForm.controls.country_id.value)
      if(eve){
        this.stateGovernorate = false
       this.global.getGovernorates(eve.id).subscribe(res=>{
        this.governorates = res.data
       })
      }
       
  }
  handleClear(){
    
    this.governorates = []
    this.cities = []
    // this.addressForm.controls['country_id'].reset()
    // this.addressForm.controls['state_id'].reset()
    this.stateGovernorate = true
    this.stateCities = true
    this.addressForm.controls['country_id'].patchValue('')
    this.addressForm.controls['state_id'].patchValue('')
    this.addressForm.controls['city_id'].patchValue('')
  }
  handleCLearGovernorates(){
    this.cities = []
    this.stateCities = true
    this.addressForm.controls['city_id'].patchValue('')
  }
  stateCities = true
  handleCities(eve : any){
    if (eve){
      this.stateCities = false
      console.log(eve)
      this.global.getCities(eve.id).subscribe(res=>{
        this.cities = res.data
      })
    }
    
  }
}
