import { useState } from "react";
import "./App.css";
import NewTodo from "./components/Todo/Add/NewTodo";
import TodoList from "./components/Todo/list/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  const todo = (newTodo) => {
    setTodoList((prevState) => {
      return [newTodo, ...prevState];
    });
  };

  const removeTodo = (todoId) => {
    setTodoList((prevState) => {
      const filteredTodo = prevState.filter( (todo) => {
        return todo.id !== todoId
      });
      return filteredTodo;
    });
  }

  return (
    <div className="app">
      <NewTodo handleNewData={todo} />
      <TodoList todoList={todoList} onDelete={removeTodo}/>
    </div>
  );
}

export default App;
