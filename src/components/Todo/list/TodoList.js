import Todo from "./Todo";
import Card from "../../UI/Card";
import '../../../assets/css/TodoList.css'

const TodoList = (props) => {
  return (
    <Card className='todo_list'>
      {props.todoList.map((data) => {
        return (
          <Todo
            key={data.id}
            date={data.date.toLocaleDateString()}
            title={data.title}
            time={data.time}
          />
        );
      })}
    </Card>
  );
};

export default TodoList;
