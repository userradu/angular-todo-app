import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CreateTodoItemStubComponent } from 'src/testing/create-todo-item-stub.component';
import { TodoItemsListStubComponent } from 'src/testing/todo-items-list-stub.component';
import { TodoItemsService } from './todo-items.service';
import { By } from '@angular/platform-browser';
import { TodoItemStatusInfo } from './todo-item-status-info.interface';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let todoItemsService: TodoItemsService;

  beforeEach(async(() => {
    todoItemsService = jasmine.createSpyObj('TodoItemsService', [
      'getTodoItems',
      'addTodoItem',
      'updateTodoItemStatus',
      'removeTodoItem'
    ]);

    TestBed.configureTestingModule({
      declarations: [
        CreateTodoItemStubComponent,
        TodoItemsListStubComponent,
        AppComponent
      ],
      providers: [{ provide: TodoItemsService, useValue: todoItemsService }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should get all the todo items by using the TodoItemService', () => {
    expect(todoItemsService.getTodoItems).toHaveBeenCalled();
  });

  it('should create a new todo item by using the TodoItemService', () => {
    const createTodoItemDebugElement = fixture.debugElement.query(
      By.directive(CreateTodoItemStubComponent)
    );
    createTodoItemDebugElement.componentInstance.addTodoItem.emit(
      'todo item name'
    );
    expect(todoItemsService.addTodoItem).toHaveBeenCalledWith('todo item name');
    expect(todoItemsService.getTodoItems).toHaveBeenCalled();
  });

  it('should change the status of a todo item by using the TodoItemService', () => {
    const todoItemInfo: TodoItemStatusInfo = {
      id: 1,
      completed: false
    };
    const todoItemsListDebugElement = fixture.debugElement.query(
      By.directive(TodoItemsListComponentStub)
    );
    todoItemsListDebugElement.componentInstance.changeTodoItemStatus.emit(
      todoItemInfo
    );
    expect(todoItemsService.updateTodoItemStatus).toHaveBeenCalledWith(
      todoItemInfo
    );
    expect(todoItemsService.getTodoItems).toHaveBeenCalled();
  });

  it('should remove a todo item by using the TodoItemService', () => {
    const todoItemsListDebugElement = fixture.debugElement.query(
      By.directive(TodoItemsListComponentStub)
    );
    todoItemsListDebugElement.componentInstance.removeTodoItem.emit(1);
    expect(todoItemsService.removeTodoItem).toHaveBeenCalledWith(1);
    expect(todoItemsService.getTodoItems).toHaveBeenCalled();
  });
});
