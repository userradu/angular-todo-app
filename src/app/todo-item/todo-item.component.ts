import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../todo-item.interface';
import { TodoItemStatusInfo } from '../todo-item-status-info.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todoItem: TodoItem;
  @Output() changeTodoItemStatus = new EventEmitter<TodoItemStatusInfo>();
  @Output() removeTodoItem = new EventEmitter<number>();

  onTodoItemStatusChanged(event: any) {
    this.changeTodoItemStatus.emit({
      id: this.todoItem.id,
      completed: event.target.checked
    });
  }

  onRemoveTodoItemClick() {
    this.removeTodoItem.emit(this.todoItem.id);
  }
}
