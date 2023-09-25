import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent {
  // Accepting todo send by todos
  @Input() todo!: Todo
  // SCreating Emitter for Sending message from todo-itme to todos for deleting the todo
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todoActiveStatus : EventEmitter<Todo> = new EventEmitter();

  // OnClick function which handles on clicked on Remove button
  onClick(todo : Todo){
    this.todoDelete.emit(todo);
    console.log("Remove Clicked");
  }

  activeStatus(todo: Todo){
    this.todoActiveStatus.emit(todo);
  }
}
