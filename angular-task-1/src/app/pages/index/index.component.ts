import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  posts:any =[]

  handleUserData(data : any){
    // console.log(data)
    this.posts.push(data)
  }
  handlePostEdit( data : any){
    this.posts[0].title = this.posts[0].title.push(data)
    // this.posts[0].description = this.posts[num].description.push(data)
  }
  arr = [{
    id : 1,
    title : 'javascript',
    description : 'dff d fjlk kjsdlf dksfjal kfldsaf dfs'
  },
  {
    id : 2,
    title : 'bootstrap',
    description : 'dfdsf dkkk oiii sddd dff'
  },
  {
    id : 3,
    title : 'css',
    description : 'kk yy aa oiii'
  },
  
]
}
