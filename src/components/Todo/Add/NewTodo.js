import '../../../assets/css/AddTodo.css'
import TodoForm from './TodoForm'

const NewTodo = (props) => {
    const formData = (inputData) => {
        const data = {
            id: Math.random(),
            ...inputData
        }
        props.newData(data);
    } 

    return (
        <div className='todo'>
            <h2>Add Todo</h2>
            <TodoForm data={formData}/>
        </div>
    )
}

export default NewTodo