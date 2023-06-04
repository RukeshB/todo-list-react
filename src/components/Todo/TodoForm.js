import '../../assets/css/TodoForm.css'

const TodoForm = () => {
    return (
        <div className='todoForm'>
            <form className='todoForm__form'>
            <div className='todoForm__form_control w-15'>
                <label htmlFor='date'>Date</label>
                <input id='date' type='date' className='todoForm__date' />
            </div>
            <div className='todoForm__form_control w-50'>
                <label htmlFor='title'>Title</label>
                <input id='title' type='text'/>
            </div>
            <div className='todoForm__form_control w-15'>
                <label htmlFor='time'>Time</label>
                <input id='time' type='time'/>
            </div>
            <div className='todoForm__form_control w-10'>
                <button type='submit'>Add</button>
            </div>
        </form>
        </div>
    )
}

export default TodoForm