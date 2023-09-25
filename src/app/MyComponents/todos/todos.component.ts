import { Component } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
    todosVariable = "I am todos Varibale"; // Variable Me
    localItems: string;
    todos: Todo[];
    
    constructor(){
      this.localItems = localStorage.getItem("todos") as string;
      if(this.localItems == null){
        this.todos = [];
      }
      else{
        this.todos = JSON.parse(this.localItems);
      }
    }

    // Removing Todo
    deleteTodo(todo: Todo){
      console.log(todo);
      const index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
      localStorage.setItem("todos",JSON.stringify(this.todos));
    }

    // Add Todo
    addTodo(todo: Todo){
      console.log("Item Added");
      console.log(todo);
      this.todos.push(todo);
      localStorage.setItem("todos",JSON.stringify(this.todos));
    }

    activeStatusTodo(todo: Todo){
      console.log(todo);
      const index = this.todos.indexOf(todo);
      this.todos[index].active = !this.todos[index].active;
    }
}



