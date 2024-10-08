import { Component, Output, EventEmitter, output } from '@angular/core';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  categories : any
  listCategories : any
  arr : any = [{'<i class="fa-solid fa-mug-hot"></i>':68,
     '<i class="fa-solid fa-boxes-stacked"></i>':66,
     '<i class="fa-solid fa-cloud-sun"></i>':53,
     '<i class="fa-regular fa-handshake"></i>':44,}]
  message : string = "Hello Aya!"
  @Output() messageEvent = new EventEmitter<string>();
  constructor(private global : GlobalService){

  }
  
  ngOnInit(){
    this.global.getCategory().subscribe(res=>{
      // console.log(res.data)
      this.categories = res.data
      this.categories = this.categories.slice(0,12)
      // console.log(this.categories[0].category_data.category_id == 68
      // console.log(this.categories[0].category_data.category_id)
      // console.log(this.categories.category_name)
    })
    this.global.getListCategories().subscribe(res=>{
      this.listCategories = res.data
      this.listCategories = this.listCategories.slice(0,2)
      // console.log(res.data)
      // console.log(this.listCategories)
    })
  }



  

}
