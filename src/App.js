import { useState } from 'react';
import './App.css'
import NewTodo from './components/Todo/Add/NewTodo';

function App() {
  const [todoList, setTodoList] = useState({})

  const todo = (newTodo) => {
    setTodoList(newTodo);
  }

  return (
    <div className='app'>
      <NewTodo newData={todo}/>
    </div>
  );
}

export default App;
