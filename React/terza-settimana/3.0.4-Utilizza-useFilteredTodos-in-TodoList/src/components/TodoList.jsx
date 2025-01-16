import React from 'react'
import { useFetch } from "../hooks/useFetch";
import { useFilteredTodos } from "../hooks/useFilteredTodos"
import { useState } from 'react';

const API_URL = "https://jsonplaceholder.typicode.com/todos"

function TodoList() {

    const { data: posts, error, loading, reload } = useFetch(API_URL, { method: "GET" })
    const [searchInput, setSearchInput] = useState('')
    const filtrati = useFilteredTodos(posts, searchInput)   
    
    return (
        <div>
            {loading && <p>Caricamento in corso...</p>}
            
            {error && <p>Si è verificato un errore: {error.message}</p>}

            Filtra: <input type="text" onChange={e => setSearchInput(e.target.value)}/>
            <ul>
                {filtrati && filtrati.map((post) => (
                    <li key={post.id}>user id: ({post.userId}) id del post: ({post.id}) titolo: "{post.title}"</li>  
                ))
            }
            </ul>
        </div>
    )
}

export default TodoList;