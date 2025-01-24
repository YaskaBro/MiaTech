import { useEffect } from "react"
import { useState } from "react"


export const useFilteredTodos = (todos, inputFilter) => {
    const [ricerca, setRicerca] = useState([])

    useEffect(() => {
        if (todos) {
            const filtrati = todos.filter(todo => todo.title.includes(inputFilter.toLowerCase()))
            setRicerca(filtrati)
        }
        
    },[todos, inputFilter])



    return ricerca
}
