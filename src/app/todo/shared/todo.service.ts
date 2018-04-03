import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database'
import { Todo } from '../../Todo.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class TodoService {
  
  toDoListChanged = new Subject<Todo[]>();

  constructor(private firebasedb: AngularFireDatabase) { }

  private todoList : Todo[] = [
    new Todo(
        "Initial Todo task"
    )
];

  getToDoList() {
    return this.todoList.slice();
  }

  addItem(item : Todo){
    this.todoList.push(item);
    this.toDoListChanged.next(this.todoList.slice());
  }

  checkIfNameExists(name : string){
    if(this.todoList.find( x => x.name.toLowerCase() === name.toLowerCase()))
    {
      return true;
    }
    else {
      return false;
    }
  }

  deleteItem(name : string){
     this.todoList = this.todoList.filter( x => x.name !== name);
     this.toDoListChanged.next(this.todoList.slice());
  }

  // addTitle(title: string) {
  //   this.toDoList.push({
  //     title: title,
  //     isChecked: false
  //   });
  // }

  // checkOrUnCheckTitle($key: string, flag: boolean) {
  //   this.toDoList.update($key, { isChecked: flag });
  // }

  // removeTitle($key: string) {
  //   this.toDoList.remove($key);
  // }

}
