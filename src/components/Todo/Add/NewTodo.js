import "../../../assets/css/NewTodo.css";
import TodoForm from "./TodoForm";
import Card from "../../UI/Card";
import { useState } from "react";

const NewTodo = (props) => {
  const [isAddTodo, setIsAddTodo] = useState(false);
  const formData = (inputData) => {
    const data = {
      id: Math.random(),
      ...inputData,
    };
    props.newData(data);
  };

  const hideFromHandler = () => {
    setIsAddTodo(false);
  }

  const showFromHandler = () => {
    setIsAddTodo(true);
  }

  let output = <button onClick={showFromHandler}> Add Todo</button>;

  if (isAddTodo) {
    output = (
      <Card className="new_todo">
        <h2>Add Todo</h2>
        <TodoForm data={formData} hide={hideFromHandler}/>
      </Card>
    );
  }

  return (
    output
  );
};

export default NewTodo;
