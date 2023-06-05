import Card from "../../UI/Card";
import "../../../assets/css/Todo.css";

const Todo = (props) => {
  return (
    <Card className='todo'>
      <div className="todo__content">
        <div className="todo__main_content">
          <div className="todo__main_content_date_time">{props.date}</div>
          <div className="todo__main_content_title">{props.title}</div>
          <div className="todo__main_content_date_time">{props.time} hour</div>
        </div>
        <div className="todo__close">
            <button>X</button>
        </div>
      </div>
    </Card>
  );
};

export default Todo;
