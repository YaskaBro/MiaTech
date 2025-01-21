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
    
    const Invia = (event) => {
        event.preventDefault();
        alert(`La tua username è ${inputU} e la tua password è: ${inputP}`)
    }

    return (
        <>  <form onSubmit={Invia}>
                <label for="username">Username:</label>
                <input onChange={testoU} type="text" />
                <label for="password">Password:</label>
                <input onChange={testoP} type="text" />
                <button type="submit" >Invia</button>
            </form>
        </>
    )
}

export default LoginForm;