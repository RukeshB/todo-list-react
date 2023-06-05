import { useState } from "react";
import "../../../assets/css/TodoForm.css";

const TodoForm = (props) => {
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');

    const dateChangeHandler = (event) => {
        setDate(event.target.value);
    }

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const timeChangeHandler = (event) => {
        setTime(event.target.value);
    }

    const clear_input = () => {
        setDate('');
        setTitle('');
        setTime('');
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const inputs = {
            date: new Date(date),
            title: title,
            time: new Date(time)
        }
        props.data(inputs);
        clear_input();
    }

    const cancelHandler = (event) => {
        clear_input();
    }

  return (
    <form className="todoForm__form" onSubmit={submitHandler}>
      <div className="todoForm__form_control dateTime">
        <label htmlFor="date">Date</label>
        <input id="date" value={date} type="date" className="todoForm__date" onChange={dateChangeHandler}/>
      </div>
      <div className="todoForm__form_control">
        <label htmlFor="title">Title</label>
        <input id="title" value={title} type="text" onChange={titleChangeHandler}/>
      </div>
      <div className="todoForm__form_control dateTime">
        <label htmlFor="time">Time (in hour)</label>
        <input id="time" value={time} type="number" min={0} onChange={timeChangeHandler}/>
      </div>
      <div className="todoForm__form_control_button">
        <button type="submit">Add</button>
        <button onClick={cancelHandler}>Cancel</button>
      </div>
    </form>
  );
};

export default TodoForm;
