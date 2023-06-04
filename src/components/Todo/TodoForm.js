import "../../assets/css/TodoForm.css";

const TodoForm = () => {
  return (
    <form className="todoForm__form">
      <div className="todoForm__form_control dateTime">
        <label htmlFor="date">Date</label>
        <input id="date" type="date" className="todoForm__date" />
      </div>
      <div className="todoForm__form_control">
        <label htmlFor="title">Title</label>
        <input id="title" type="text" />
      </div>
      <div className="todoForm__form_control dateTime">
        <label htmlFor="time">Time</label>
        <input id="time" type="time" />
      </div>
      <div className="todoForm__form_control_button">
        <button type="submit">Add</button>
        <button>Cancel</button>
      </div>
    </form>
  );
};

export default TodoForm;
