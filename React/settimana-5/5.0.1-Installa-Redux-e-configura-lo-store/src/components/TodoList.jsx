import React, { useContext, useEffect, useRef, useState, useMemo, useCallback } from "react";
import { useFetch } from "../hooks/useFetch";
import { TodosContext } from "../provider/TodosContext";
import { Link, useSearchParams } from "react-router-dom";

const API_URL = "https://jsonplaceholder.typicode.com/todos"

function TodoList() {
    const { todos, setTodos } = useContext(TodosContext);
    const { data, error, loading, reload } = useFetch(API_URL, { method: "GET" })
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef()
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('query') || ''

    useEffect(() => {
        if (data) {
            setTodos(data);
        }
    }, [data, setTodos]);

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

    return (
        <div>
            {loading && <p>Caricamento in corso...</p>}

            {error && <p>Si è verificato un errore: {error.message}</p>}

            Filtra: <input ref={inputRef} type="text" value={inputValue} onChange={handleChange} />
            <ul>
                {filtrati && filtrati.map((todo) => (
                    <li key={todo.id}><Link to={`/todo/${todo.id}`}>user id: ({todo.userId}) id del post: ({todo.id}) titolo: "{todo.title}"</Link></li>
                ))
                }
            </ul>
        </div>
    )
}

export default TodoList;