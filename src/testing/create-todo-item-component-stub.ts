import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-todo-item',
  template: ''
})
export class CreateTodoItemComponentStub {
    @Output() addTodoItem = new EventEmitter<string>();
}
