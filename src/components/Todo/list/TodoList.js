import Todo from "./Todo";
import Card from "../../UI/Card";
import '../../../assets/css/TodoList.css'

const TodoList = (props) => {
  let output = <h2>No Data</h2>

  const deleteHandler = (todoId) => {
    props.onDelete(todoId)
  }

  if(props.todoList.length > 0){
    output = props.todoList.map((data) => {
      return (
        <Todo
          key={data.id}
          id={data.id}
          date={data.date.toLocaleDateString()}
          title={data.title}
          time={data.time}
          onDelete={deleteHandler}
        />
      );
    })
  }

  return (
    <Card className='todo_list'>
      {output}
    </Card>
  );
};

export default TodoList;
