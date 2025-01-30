import React, { useContext, useEffect, useRef, useState, useMemo, useCallback } from "react";
import { useFetch } from "../hooks/useFetch";
import { addTodo, completeTodo } from "../store/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";

const API_URL = "https://jsonplaceholder.typicode.com/todos"

function TodoList() {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);
    const { data, error, loading, reload } = useFetch(API_URL, { method: "GET" })
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef()
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') || ''

    useEffect(() => {
        if (data) {
            data.forEach(todo => dispatch(addTodo(todo)));
        }
    }, [data, dispatch]);

    const filtrati = useMemo(() => {
        if (!todos) return [];
        return todos.filter(todo =>
            todo.title.toLowerCase().includes(query.toLocaleLowerCase())
        )
    }, [todos, query])

    const handleChange = useCallback((event) => {
        const value = event.target.value;
        setInputValue(event.target.value)
        setSearchParams({ query: value });
    }, [setSearchParams]);

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const handleComplete = (todo) => {
        dispatch(completeTodo({ id: todo.id }));
    };

    return (
        <div>
            {loading && <p>Caricamento in corso...</p>}
            {error && <p>Si è verificato un errore: {error.message}</p>}
            Filtra: <input ref={inputRef} type="text" value={inputValue} onChange={handleChange} />
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                            {todo.title}
                        </span>
                        <button onClick={() => handleComplete(todo)} disabled={todo.completed}>
                            {todo.completed ? 'Completed' : 'Mark as Complete'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;