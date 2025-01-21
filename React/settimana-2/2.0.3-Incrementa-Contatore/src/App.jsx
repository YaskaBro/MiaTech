import { useState } from "react"
import Counter from "./components/Counter"

const App = () => {
    const [ncounter, setncounter] = useState(0)
    const increment = () => {
        setncounter(_ncounter => _ncounter + 1)
    }

    return (
        <>
            <div>
                <button onClick={increment}> Aggiungi</button>
                <Counter number= {ncounter}/>
            </div>
        </>
    )
}

export default App