import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemComponent } from './todo-item.component';
import { TodoItem } from '../todo-item.interface';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let todoItem: TodoItem;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TodoItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
    todoItem = {
      id: 1,
      name: 'Learn Angular',
      completed: false
    };
    component.todoItem = todoItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the "changeTodoItemStatus" event with the correct arguments when the checkbox is checked', () => {
    spyOn(component.changeTodoItemStatus, 'emit');

    const checkbox = fixture.nativeElement.querySelector(
      'input[type=checkbox]'
    );

    checkbox.click();
    fixture.detectChanges();

    expect(component.changeTodoItemStatus.emit).toHaveBeenCalledWith({
      id: 1,
      completed: true
    });
  });

  it('should emit the "changeTodoItemStatus" event with the correct arguments when the checkbox is unchecked', () => {
    spyOn(component.changeTodoItemStatus, 'emit');
    todoItem.completed = true;
    fixture.detectChanges();

    const checkbox = fixture.nativeElement.querySelector(
      'input[type=checkbox]'
    );

    checkbox.click();
    fixture.detectChanges();

    expect(component.changeTodoItemStatus.emit).toHaveBeenCalledWith({
      id: 1,
      completed: false
    });
  });

  it('should set the checkbox as checked when the status is complete', () => {
    todoItem.completed = true;
    fixture.detectChanges();

    const checkbox = fixture.nativeElement.querySelector(
      'input[type=checkbox]'
    );

    expect(checkbox.checked).toBe(true);
  });

  it('should set the checkbox as unchecked when the status is incomplete', () => {
    const checkbox = fixture.nativeElement.querySelector(
      'input[type=checkbox]'
    );
    expect(checkbox.checked).toBe(false);
  });

  it('should set strikethrough text formatting to the todo item name when the status is complete', () => {
    todoItem.completed = true;
    fixture.detectChanges();

    expect(fixture.nativeElement.querySelector('label')).toHaveClass(
      'text-strike'
    );
  });

  it('should not set strikethrough text formatting to the todo item name when the status is incomplete', () => {
    expect(fixture.nativeElement.querySelector('label')).not.toHaveClass(
      'text-strike'
    );
  });

  it('should emit the "removeTodoItem" event with the correct arguments when the "Remove" button is clicked', () => {
    spyOn(component.removeTodoItem, 'emit');
    const removeBtn = fixture.nativeElement.querySelector('.remove-todo-item');

    removeBtn.click();
    fixture.detectChanges();

    expect(component.removeTodoItem.emit).toHaveBeenCalledWith(1);
  });
});
