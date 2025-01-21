import React from 'react'
import { useFetch } from "../hooks/useFetch";

const API_URL = "https://jsonplaceholder.typicode.com/todos"

function TodoList() {

    const { data: posts, error, loading, reload } = useFetch(API_URL, { method: "GET" })

    return (
        <div>
            {loading && <p>Caricamento in corso...</p>}
            
            {error && <p>Si è verificato un errore: {error.message}</p>}
            
            <ul key={post.id}>
                {posts && posts.map((post) => (
                    <li>user id: ({post.userId}) id del post: ({post.id}) titolo: "{post.title}"</li>  
                ))
            }
            </ul>
        </div>
    )
}

export default TodoList;