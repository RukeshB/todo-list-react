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

  return (
    <div className="app">
      <NewTodo newData={todo} />
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
