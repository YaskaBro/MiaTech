import { useEffect, useState } from "react"

const API_URL = "https://jsonplaceholder.typicode.com/todos"

const TodoList = () => {
    const [list, setList] = useState(null);
    
    const fetchData = async () => {
        try {
            const response = await fetch(API_URL)

            if (!response.ok) {
                throw new Error("Errore durante il caricamento della lista");
            }

            const data = await response.json()

            setList(data)          
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, []);
    
    return (
        <>  <h2>Lista delle cose da fare:</h2>
            <h2>Mi mancano gli stati di errore e caricamento</h2>
            <ul>
                {
                    list && list.map((list) => (
                        <li>utente: ({list.userId}) id: ({list.id}) titolo: {list.title}</li>
                    ))
                }
            </ul>
        </>
    )
}


export default TodoList;