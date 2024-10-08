import { Component, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrl: './single-category.component.css'
})
export class SingleCategoryComponent {
  singleCategory : any
  
  constructor(private global : GlobalService, private activated : ActivatedRoute){
    console.log(this.activated.snapshot.paramMap.get("categoryId"))
  }

  ngOnInit(){
    let id = this.activated.snapshot.paramMap.get("categoryId")
    this.global.getSingleCategory(id).subscribe(res=>{
      console.log(res.data)
      this.singleCategory = res.data
    })

  }

  
 

}
