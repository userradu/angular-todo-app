import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo-item.interface';
import { TodoItemStatusInfo } from '../todo-item-status-info.interface';

@Component({
  selector: 'app-todo-items-list',
  templateUrl: './todo-items-list.component.html',
  styleUrls: ['./todo-items-list.component.css']
})
export class TodoItemsListComponent {
  @Input() todoItems: TodoItem[];
  @Output() changeTodoItemStatus = new EventEmitter<TodoItemStatusInfo>();
  @Output() removeTodoItem = new EventEmitter<number>();

  onChangeTodoItemStatus(todoItemStatusInfo: TodoItemStatusInfo) {
    this.changeTodoItemStatus.emit(todoItemStatusInfo);
  }

  onRemoveTodoItem(id: number) {
    this.removeTodoItem.emit(id);
  }
}
