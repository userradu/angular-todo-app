import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from 'src/app/todo-item.interface';
import { TodoItemStatusInfo } from 'src/app/todo-item-status-info.interface';

@Component({
  selector: 'app-todo-items-list',
  template: ''
})
export class TodoItemsListComponentStub {

  @Input() todoItems: TodoItem[];
  @Output() changeTodoItemStatus = new EventEmitter<TodoItemStatusInfo>();
  @Output() removeTodoItem = new EventEmitter<number>();

}
