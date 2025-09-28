import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { useTodo } from '../src/context/TodoContext'

const Todo = () => {
    const { todos, completeTodo, deleteTodo, doneTodos } = useTodo();

    return (
        <div className='todo-container'>
            <h1 className='todo-container__header'>NAYUN TODO</h1>
            <TodoForm></TodoForm>
            <div className="render-container">
                <TodoList
                    title='할 일'
                    todos={todos}
                    buttonLabel='완료'
                    buttonColor='#28a745'
                    onClick={completeTodo}
                ></TodoList>

                <TodoList
                    title='완료'
                    todos={doneTodos}
                    buttonLabel='삭제'
                    buttonColor='#dc3545'
                    onClick={deleteTodo}
                ></TodoList>
            </div>
        </div>
    )
}

export default Todo;