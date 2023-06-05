import Todo from "./Todo";
import Card from "../../UI/Card";
import '../../../assets/css/TodoList.css'

const TodoList = (props) => {
  let output = <h2>No Data</h2>

  if(props.todoList.length > 0){
    output = props.todoList.map((data) => {
      return (
        <Todo
          key={data.id}
          date={data.date.toLocaleDateString()}
          title={data.title}
          time={data.time}
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
