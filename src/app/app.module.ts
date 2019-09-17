import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CreateTodoItemComponent } from './create-todo-item/create-todo-item.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoItemsListComponent } from './todo-items-list/todo-items-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateTodoItemComponent,
    TodoItemComponent,
    TodoItemsListComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
