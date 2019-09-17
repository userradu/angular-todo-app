import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { CreateTodoItemComponent } from './create-todo-item.component';
import { FormsModule } from '@angular/forms';

describe('CreateTodoItemComponent', () => {
  let component: CreateTodoItemComponent;
  let fixture: ComponentFixture<CreateTodoItemComponent>;
  let nativeElement: HTMLElement;
  let button: HTMLButtonElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CreateTodoItemComponent]
    }).compileComponents(); // compile template and css (fetching urls is asynchronous)
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTodoItemComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    button = fixture.nativeElement.querySelector('button');
    fixture.detectChanges(); // instructs TestBed to perform data binding
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event with the todo item name when the "Add" button is clicked', () => {
    const todoItemName = 'name';
    component.todoItemName = todoItemName;

    component.addTodoItem.subscribe((name: string) => {
      expect(name).toEqual(todoItemName);
    });

    button.dispatchEvent(new Event('click'));
  });

  it('should clear the text input after the event is being emitted', () => {
    const input = nativeElement.querySelector('input');
    const todoItemName = 'name';

    input.value = todoItemName;
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.todoItemName).toEqual(todoItemName);

    button.dispatchEvent(new Event('click'));

    expect(component.todoItemName).toEqual('');
  });

  it('should not emit an event when the input is empty', () => {
    spyOn(component.addTodoItem, 'emit');

    button.dispatchEvent(new Event('click'));

    expect(component.addTodoItem.emit).not.toHaveBeenCalled();
  });
});
