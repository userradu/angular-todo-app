# TodoApp

This project was created in order to learn more about unit testing in Angular.

## Functionalities

1. Create todo item.
2. Complete todo item.
3. Delete todo item.

## Tests

### Create Todo Item Component
- an event is being emitted with the todo item name as argument when the 'Add' button is clicked

- it clears the input after emitting the event

- an event is not being emitted if the todo item name is empty. An alert with an error message is being displayed in this case. 

### Todo Item Component
- the 'onTodoItemStatusChanged' event is being emitted with the correct arguments when the checkbox is checked/unchecked

- sets the checkbox as checked/unchecked when the status is complete/incomplete

- strikethrough text formatting is being applied to the todo item name when the status is complete

- strikethrough text formatting is not being applied to the todo item name when the status is incomplete

- the 'removeTodoItem' event is being emitted when the 'Remove" button is clicked

### App Component
- get all the todo items by using the TodoItemService

- creates a new todo item by using the TodoItemService

- changes the status of a todo item by using the TodoItemService

- removes a todo item by using the TodoItemService