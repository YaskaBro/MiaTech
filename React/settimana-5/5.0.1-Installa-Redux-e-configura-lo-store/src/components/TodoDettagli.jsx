import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

const TodoDettagli = () => {
    const { id } = useParams()
    const [todo, setTodo] = useState(null)

    useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then((response) => response.json())
            .then((data) => setTodo(data));
    }, [id]);

    if (!todo) {
        return <p>Caricamento in corso...</p>;
    }

    return (
        <div>
            <h1>Dettagli del To-Do</h1>
                <p>ID: {todo.id}</p>
                <p>Utente: {todo.userId}</p>
                <p>Titolo: {todo.title}</p>
        </div>
    )
}

export default TodoDettagli
