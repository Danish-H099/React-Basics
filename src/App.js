import React from "react";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Cards from "./components/Cards/Cards"
import Increment from "./components/Increment/Increament";
import Todolist from "./components/Todolist/Todolist";
import DynamicRoutes from "./components/DynamicRoutes/DynamicRoutes"
import User from "./components/DynamicRoutes/User"

export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/cards" element={<Cards />} />
                    <Route path="/increment" element={<Increment />} />
                    <Route path="/todolist" element={<Todolist />} />
                    <Route path="/DynamicRoutes" element={<DynamicRoutes />} />
                    <Route path="/User/:id" element={<User />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}