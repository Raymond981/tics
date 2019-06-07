import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  formTask: FormGroup
  constructor( private api: ApiService,  private formBuilder: FormBuilder) {
    this.formTask = this.formBuilder.group({
      'title': [''],
      'content': [''],
    });
  }
  
  tareas: any = [];
  id = 0;
  actualizar = true;
  
  ngOnInit() {
    this.api.getTask().subscribe(response => {
      console.log(response)
      this.tareas = response
    });
  }

  addTask(){
    this.api.postTask(this.formTask.value).subscribe(reponse => {
      console.log(reponse)
      this.ngOnInit()
    })
  }


  deleteTask(id){
    this.api.deleteTask(id).subscribe(response =>{
      console.log(response);
      this.ngOnInit();
    })
  }

  updateTask(data: any){
    this.actualizar = false
    this.id = data.id
    this.formTask = this.formBuilder.group({
      'title': [data.title],
      'content': [data.content],
    });
  }
  
  updateTask2(){
    this.api.updateTask(this.formTask.value,this.id).subscribe(response =>{
      console.log(response);
      this.ngOnInit();
      this.actualizar=true;
      this.formTask = this.formBuilder.group({
        'title': [''],
        'content': [''],
    });
    
    })
  }

}