import "../../../assets/css/NewTodo.css";
import TodoForm from "./TodoForm";
import Card from "../../UI/Card";
import { useState } from "react";
import axios from "axios";

const NewTodo = (props) => {
  const [isAddTodo, setIsAddTodo] = useState(false);
  const formData = (inputData) => {
    const data = {
      id: Math.random(),
      ...inputData,
    };
    axios.post("https://sheet.best/api/sheets/b2d4864a-e4e9-4623-90d6-f8a7b8e1fb8e", data).then((response) => {
        console.log(response);
      });
    props.handleNewData(data);
  };

  const hideFromHandler = () => {
    setIsAddTodo(false);
  }

  const showFromHandler = () => {
    setIsAddTodo(true);
  }

  let output = <div className="add_todo"><button onClick={showFromHandler} className='new_todo__button'> Add Todo</button></div>

  if (isAddTodo) {
    output = (
      <Card className="new_todo">
        <h2>Add Todo</h2>
        <TodoForm handleFormSubmit={formData} hide={hideFromHandler}/>
      </Card>
    );
  }

  return (
    output
  );
};

export default NewTodo;
