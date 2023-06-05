import '../../../assets/css/AddTodo.css'
import TodoForm from './TodoForm'

const NewTodo = (props) => {
    const formData = (inputData) => {
        props.newData(inputData);
    } 

    return (
        <div className='todo'>
            <h2>Add Todo</h2>
            <TodoForm data={formData}/>
        </div>
    )
}

export default NewTodo