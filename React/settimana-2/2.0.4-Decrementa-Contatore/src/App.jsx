import { useState } from "react"
import Counter from "./components/Counter"

const App = () => {
    const [ncounter, setncounter] = useState(0)
    const increment = () => {
        setncounter(ncounter + 1)
    }

    const decrement = () => {
        setncounter((_ncounter) => {
            return _ncounter - 1})
    }

    return (
        <>
            <div>
                <button onClick={increment}> Aggiungi</button>
                <button onClick={decrement}> Sottrai</button>
                <Counter number= {ncounter}/>
            </div>
        </>
    )
}

export default App