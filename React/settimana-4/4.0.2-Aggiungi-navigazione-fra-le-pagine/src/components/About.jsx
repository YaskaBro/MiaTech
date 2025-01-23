import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <h1>Benvenuto in questa App!</h1>
            <p>Questa App è nata come esercizio della miatech, spero Manfredi che ti piaccia, sto dormendo in piedi... </p>
        </div>
    )
}

export default About
