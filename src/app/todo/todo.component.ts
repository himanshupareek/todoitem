import { Component, OnInit } from '@angular/core';
import { TodoService } from './shared/todo.service';
import { Subscription } from 'rxjs/Subscription';
import { Todo } from '../Todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  //styleUrls: ['./todo.component.css'],
  providers : [TodoService]
})
export class TodoComponent implements OnInit {
  toDoListArray: any[];
  todoSubscription : Subscription;
  id : number;
  toDoListError : boolean = false;
  errorTxt : string;

  constructor(private toDoService: TodoService) { }

  ngOnInit() {
    this.toDoListArray = this.toDoService.getToDoList();

    this.todoSubscription = this.toDoService.toDoListChanged.subscribe(
      (recipes : Todo[]) => {
        this.toDoListError = false;
        this.toDoListArray = recipes;
      }
    );
  }

  onAdd(itemTitle) {
    if(itemTitle.value.trim() === "")
    {
      this.toDoListError = true;
      this.errorTxt = "To-do item can't be blank.";
    }
    else if(this.toDoService.checkIfNameExists(itemTitle.value))
    {
      this.toDoListError = true;
      this.errorTxt = "To-do item already exists.";
    }
    else{
      this.toDoListError = false;
      this.toDoService.addItem(new Todo(itemTitle.value));
    }
  }

  onDelete($key : string){
     this.toDoService.deleteItem($key);
  }

}
