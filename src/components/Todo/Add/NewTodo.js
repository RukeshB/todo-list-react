import '../../../assets/css/AddTodo.css'
import TodoForm from './TodoForm'
import Card from '../../UI/Card'

const NewTodo = (props) => {
    const formData = (inputData) => {
        const data = {
            id: Math.random(),
            ...inputData
        }
        props.newData(data);
    } 

    return (
        <Card className='todo'>
            <h2>Add Todo</h2>
            <TodoForm data={formData}/>
        </Card>
    )
}

export default NewTodo