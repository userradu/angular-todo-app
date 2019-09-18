import { Injectable } from '@angular/core';
import { TodoItem } from './todo-item.interface';
import { TodoItemStatusInfo } from './todo-item-status-info.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {
  private todoItems: TodoItem[] = [
    { id: 1, name: 'Learn Angular', completed: true },
    { id: 2, name: 'Learn RxJS', completed: false },
    { id: 3, name: 'Learn Unit Testing', completed: false }
  ];

  private currentIndex = this.todoItems.length;

  constructor() {}

  getTodoItems(): TodoItem[] {
    return this.todoItems;
  }

  addTodoItem(name: string) {
    for (let todoItem of this.todoItems) {
      if (todoItem.name === name) {
        throw new Error(`The name ${name} is already taken!`);
      }
    }

    this.todoItems.push({
      id: this.currentIndex + 1,
      name,
      completed: false
    });

    this.currentIndex++;
  }

  updateTodoItemStatus(todoItemStatusInfo: TodoItemStatusInfo): void {
    for (const todoItem of this.todoItems) {
      if (todoItem.id === todoItemStatusInfo.id) {
        todoItem.completed = todoItemStatusInfo.completed;
        break;
      }
    }
  }

  removeTodoItem(id: number): void {
    const index = this.todoItems.map(e => e.id).indexOf(id);
    this.todoItems.splice(index, 1);
  }
}
