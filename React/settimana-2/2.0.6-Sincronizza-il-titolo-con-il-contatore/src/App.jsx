import { useState } from "react"
import Counter from "./components/Counter"
import { useEffect } from "react"

const App = () => {
    const [ncounter, setncounter] = useState(0)
    const increment = () => {
        setncounter(ncounter + 1)
    }

    const decrement = () => {
        setncounter(ncounter - 1)
    }

    const reset = () => {
        setncounter(0)
    }

    useEffect(() => {
        document.title = ncounter
    }, [ncounter])

    return (
        <>
            <div>
                <button onClick={increment}> Aggiungi</button>
                <button onClick={decrement}> Sottrai</button>
                <button onClick={reset}> Reset</button>
                <Counter number= {ncounter}/>
            </div>
        </>
    )
}

export default App