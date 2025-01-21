import { useState } from "react"
import Counter from "./components/Counter"

const App = () => {
    const [ncounter, setncounter] = useState(0)

    return (
        <>
            <div>
                <button> Aggiungi</button>
                <Counter number= {ncounter}/>
            </div>
        </>
    )
}

export default App