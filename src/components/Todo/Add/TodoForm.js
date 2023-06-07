import { useState } from "react";
import "../../../assets/css/TodoForm.css";

const TodoForm = (props) => {
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [data, setData] = useState({
    date: "",
    title: "",
    time: "",
  });

  const clear_input = () => {
    setData({
      date: "",
      title: "",
      time: "",
    });
    setIsFirstTime(true);
  };

  const changeHandler = (event) => {
    setData((prevState) => {
      return { ...prevState, [event.target.id]: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsFirstTime(false);

    if (data.date && data.title && data.time) {
      const inputs = {
        date: new Date(data.date),
        title: data.title,
        time: data.time,
      };
      props.handleFormSubmit(inputs);
      clear_input();
    } else {
      // css class haru yesma add garni
    }
  };

  const cancelHandler = (event) => {
    clear_input();
    props.hide();
  };

  return (
    <form className="todoForm__form" onSubmit={submitHandler}>
      <div className={`todoForm__form_control dateTime ${!isFirstTime && (data.date ? "" : "todoForm__form_control__invalid")}`}>
        <label htmlFor="date">Date {!isFirstTime && <span className="todoForm__invalid_message">{data.date ? "" : "( Can not be empty) "}</span>} </label>

        <input
          id="date"
          value={data.date}
          type="date"
          className="todoForm__date"
          onChange={changeHandler}
        />
      </div>
      <div className={`todoForm__form_control ${!isFirstTime && (data.title ? "" : "todoForm__form_control__invalid")}`}>
        <label htmlFor="title">Title {!isFirstTime && <span className="todoForm__invalid_message">{data.title ? "" : "( Can not be empty )"}</span>}</label>

        <input
          id="title"
          value={data.title}
          type="text"
          onChange={changeHandler}
        />
      </div>
      <div className={`todoForm__form_control dateTime ${!isFirstTime && (data.time ? "" : "todoForm__form_control__invalid")}`}>
        <label htmlFor="time">Time (in hour) {!isFirstTime && <span className="todoForm__invalid_message">{data.time ? "" : "( Can not be empty )"}</span>}</label>

        <input
          id="time"
          value={data.time}
          type="number"
          min={1}
          onChange={changeHandler}
        />
      </div>
      <div className="todoForm__form_control_button">
        <button type="submit">Add</button>
        <button onClick={cancelHandler} className='cancel'>Cancel</button>
      </div>
    </form>
  );
};

export default TodoForm;
