import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-todo-item',
  templateUrl: './create-todo-item.component.html',
  styleUrls: ['./create-todo-item.component.css']
})
export class CreateTodoItemComponent {
  @Output() addTodoItem = new EventEmitter<string>();
  todoItemName = '';

  onAddTodoItemClick() {
    if (this.todoItemName === '') {
      alert("The name can't be empty!");
    } else {
      this.addTodoItem.emit(this.todoItemName);
      this.todoItemName = '';
    }
  }
}
