import { TodoServiceService } from './../todo-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  constructor(private todo: TodoServiceService) { }
  item: string;

  add() {
    this.todo.addItem(this.item, JSON.parse(sessionStorage.getItem('jsessionid')).access_token);
    console.log(this.item);
    this.item = '';
  }

}
