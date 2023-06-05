const Todo = (props) => {
    return (
        <div>
            <div>{props.date}</div>
            <div>{props.title}</div>
            <div>{props.time}</div>
        </div>
    )
}

export default Todo