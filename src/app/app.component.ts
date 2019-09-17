import { Component, OnInit } from '@angular/core';
import { TodoItem } from './todo-item.interface';
import { TodoItemsService } from './todo-items.service';
import { TodoItemStatusInfo } from './todo-item-status-info.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public todoItems: TodoItem[];

  constructor(private todoItemsService: TodoItemsService) {}

  ngOnInit() {
    this.todoItems = this.todoItemsService.getTodoItems();
  }

  onAddTodoItem(todoItemName: string) {
    try {
      this.todoItemsService.addTodoItem(todoItemName);
      this.todoItems = this.todoItemsService.getTodoItems();
    } catch (error) {
      alert(error.message);
    }
  }

  onChangeTodoItemStatus(todoItemStatusInfo: TodoItemStatusInfo) {
    this.todoItemsService.updateTodoItemStatus(todoItemStatusInfo);
    this.todoItems = this.todoItemsService.getTodoItems();
  }

  onRemoveTodoItem(id: number) {
    this.todoItemsService.removeTodoItem(id);
    this.todoItems = this.todoItemsService.getTodoItems();
  }
}
