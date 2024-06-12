import React from "react"
import {Link } from 'react-router-dom';
// import User from './User';

function DynamicRoutes() {
    return (
        <div className="DynamicRoutes">
                <h3>These are some Dynamic Routes</h3>
                <ul>
                    <li><Link to="/User/1">Profile 1</Link></li>
                    <li><Link to="/User/2">Profile 2</Link></li>
                    <li><Link to="/User/3">Profile 3</Link></li>
                    <li><Link to="/User/4">Profile 4</Link></li>
                    {/* <li><Link to="/User/5">Profile 5</Link></li> */}
                </ul>
        </div>
    );
}

export default DynamicRoutes;