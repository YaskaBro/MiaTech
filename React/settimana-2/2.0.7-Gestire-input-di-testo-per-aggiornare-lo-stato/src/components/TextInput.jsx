import { useState } from "react";


const TextInput = () => {
    const [input, setInput] = useState("")
    const testo = (event) => {
        setInput(event.target.value)
    }

    return (
        <>
            <input onChange={testo} type="text" />
            <h2> {input}</h2>
        </>
    )
}

export default TextInput;