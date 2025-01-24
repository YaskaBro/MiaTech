import React from 'react'
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Benvenuto in questa App!</h1>
            <p>Questa App è nata come esercizio della miatech, spero Manfredi che ti piaccia, sto dormendo in piedi... </p>
            <button onClick={() => navigate('/')}>Home</button>
        </div>
    )
}

export default About
