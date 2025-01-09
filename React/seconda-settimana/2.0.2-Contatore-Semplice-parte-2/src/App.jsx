import { useState } from "react"
import Counter from "./components/Counter"

const App = () => {
    const [ncounter, setncounter] = useState(0)

    return (
        <>
            <p><Counter number= {ncounter}/></p>
        </>
    )
}

export default App