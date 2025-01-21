import { useState } from "react";


const LoginForm = () => {
    const [inputU, setInputU] = useState("")
    const testoU = (event) => {
        setInputU(event.target.value)
    }

    const [inputP, setInputP] = useState("")
    const testoP = (event) => {
        setInputP(event.target.value)
    }

    return (
        <>
            <label for="username">Username:</label>
            <input onChange={testoU} type="text" />
            <h2>Il tuo username è: {inputU}</h2>
            <label for="password">Password:</label>
            <input onChange={testoP} type="text" />
            <h2>La tua password è: {inputP}</h2>
        </>
    )
}

export default LoginForm;