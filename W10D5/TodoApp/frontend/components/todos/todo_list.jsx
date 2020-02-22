import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';

const TodoList = (props) => {

  const todoList = props.todos.map(todo => {
    return (
      <TodoListItem key={todo.id} todo={todo}/>
      // <li>{todo.id}: {todo.title}</li>
    )
  });

  return (
    <div>
      <h3>Todo List goes here! :)</h3>
      <TodoForm receiveTodo={props.receiveTodo}/>
      <ul>
        {todoList}
      </ul>
    </div>
  );
}

export default TodoList;