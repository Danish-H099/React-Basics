import React from "react"
import {Link} from 'react-router-dom';
export default function Navbar(){
    return (
        <div className="Navbar">
            <ul>
                <li><Link exact to="/">Home</Link></li>
                <li><Link exact to="/Cards">Cards</Link></li>
                <li><Link exact to="/Increment">Increment</Link></li>
                <li><Link exact to="/Todolist">Todolist</Link></li>
                <li><Link exact to="/DynamicRoutes">Dynamic Routes (+Fetch JSON)</Link></li>
            </ul>
        </div>
    )
    
}

