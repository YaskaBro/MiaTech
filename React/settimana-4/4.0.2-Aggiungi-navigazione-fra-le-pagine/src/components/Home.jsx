import React from 'react'
import TodoList from './TodoList'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <Link to="/about">About</Link>
            <TodoList />
        </div>
    )
}

export default Home
