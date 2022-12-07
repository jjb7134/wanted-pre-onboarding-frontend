import {useState} from 'react';

import classes from './Todolist.module.css';


const Todolist = () => {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState([]);
    const [selectedId, setSelectedId] = useState(null);
    const [editValue, setEditValue] = useState('');

    const isEdit = id => id === selectedId;

    const submitHandler = e => {
        e.preventDefault();
        if(input.trim() === '') return;

        setTodo(prev => [...prev, {id:input, value: input}]);
        setInput('');
    }

    const deleteHandler = id => {
        setTodo(prev => prev.filter(todo => todo.id !== id));
    }

    const editHandler =(todo) => {
        setSelectedId(todo.id);
        setEditValue(todo.value);
    }

    const saveHandler = (todo) => {
        todo.value = editValue;
        setSelectedId(null);
    }


    return (
        <div>
            <h1>투두 리스트~!</h1>
            <h3>계획적으로 살고 성공하쟈잇~!~!</h3>
            <div className={classes.formWrap}>
            <form action='' onSubmit={submitHandler}>
                <input type='text' value={input} onChange={e => setInput(e.target.value)} />
                <input type='submit' />
            </form>
            </div>
            <ul>
                {todo.map(t => (
                    <li>
                        {isEdit(t.id) ? <input type='text' value={editValue} onChange={e => setEditValue(e.target.value)} /> : <span>{t.value}</span>}
                        {isEdit(t.id) ? <button onClick={() => saveHandler(t)}>저장</button> : <button onClick={() => editHandler(t)}>수정</button>}
                        <button onClick={() => deleteHandler(t.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todolist;