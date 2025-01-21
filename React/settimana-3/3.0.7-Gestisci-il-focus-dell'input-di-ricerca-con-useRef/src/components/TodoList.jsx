import React, { useCallback } from 'react'
import { useFetch } from "../hooks/useFetch";
import { useFilteredTodos } from "../hooks/useFilteredTodos"
import { useState } from 'react';
import { useMemo } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';

const API_URL = "https://jsonplaceholder.typicode.com/todos"

function TodoList() {

    const { data: posts, error, loading, reload } = useFetch(API_URL, { method: "GET" })
    const [inputValue, setInputValue] = useState('')
    const inputRef = useRef()
    const filtrati = useMemo(() => {
        if(!posts) return [];
        return posts.filter(post =>
            post.title.toLowerCase().includes(inputValue.toLocaleLowerCase())
        )
    })
      
    const handleChange = useCallback((event) => {
        setInputValue(event.target.value)
    },[]) 

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    
    return (
        <div>
            {loading && <p>Caricamento in corso...</p>}
            
            {error && <p>Si è verificato un errore: {error.message}</p>}

            Filtra: <input ref={inputRef} type="text" value={inputValue} onChange={handleChange}/>
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