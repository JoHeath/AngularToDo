import { Component } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  listName:Todo[] = [
    {
    task: "Cut Grass",
    completed: false 
    },
    {
      task: "Wash Dishes",
      completed: false
    },
    {
      task: "Fold Clothes",
      completed: true
    },
    {
      task: "Take a Nap",
      completed: false
    }
  ];

  completeTask(targetToDo:Todo):void{
    let index = this.listName.findIndex((t:Todo) => t == targetToDo);
    this.listName[index].completed = !targetToDo.completed;    
  } 
  
  
  list:Todo = {} as Todo;
  addTask():void{
    let result:Todo = {
      task: this.list.task,
      completed: false
    };
    this.listName.push(result);
  }

  removeTask(targetTask:Todo):void{
    let index = this.listName.findIndex((t:Todo) => t == targetTask);
    this.listName.splice(index, 1);    
  }

  displayMessage():boolean{
    let result:boolean = false;
    this.listName.forEach((t:Todo) => {
      if(t.completed == false){
        result = true;
      }
  });
    return result;
  }
}




