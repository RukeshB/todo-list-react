import { useState } from "react";
import "./App.css";
import NewTodo from "./components/Todo/Add/NewTodo";
import Todo from "./components/Todo/list/Todo";

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
      {todoList.map((data) => {
        return (
          <Todo
            key={data.id}
            date={data.date.toLocaleDateString()}
            title={data.title}
            time={data.time}
          />
        );
      })}
    </div>
  );
}

export default App;
