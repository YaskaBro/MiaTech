import { useEffect } from "react"
import { useState } from "react"


const useFilteredTodos = (todos, inputFilter) => {
    const [ricerca, setRicerca] = useState([])

    useEffect(() => {
        const filtrati = todos.filter(todo => todo.title.includes(inputFilter))
        setRicerca(filtrati)
    },[todos, inputFilter])



    return ricerca
}

export default useFilteredTodos