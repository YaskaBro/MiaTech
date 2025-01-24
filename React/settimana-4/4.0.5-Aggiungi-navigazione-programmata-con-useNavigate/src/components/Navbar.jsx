import React from 'react'
import Home from './Home'
import About from './About'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className='Nav'>
            <Link to="/">Home</Link>
            <Link to="about">About</Link>
        </div>
    )
}

export default Navbar
