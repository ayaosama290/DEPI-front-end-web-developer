import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrl: './extra.component.css'
})
export class ExtraComponent {
  inputValue = ''

  @Output() postData = new EventEmitter<any>()
  model ={
    title : '',
    description:''
  }
  @Output() EditData = new EventEmitter<any>()
  modelEdit ={
    title : '',
    description:''
  }

  handleSubmit(){
    // console.log(this.model)

    let modelData ={
      title : this.model.title,
      description : this.model.description
    }

    this.postData.emit(modelData)
  }
  // handleEdit(){
  //   let modelEEdit ={
  //     title : this.modelEdit.title,
  //     description : this.modelEdit.description
  //   }

  //   this.EditData.emit(modelEEdit)
  // }
  
  updateSubmit(newtitle: string): void {

    this.model.title = newtitle
  }  
}
