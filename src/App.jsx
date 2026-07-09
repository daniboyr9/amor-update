import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import Home from "./pages/Home/Home";
import Sobre from "./pages/Sobre/Sobre";
import Menu from "./components/NavBar/Nav";

function App() {

    return (
        <>
            <BrowserRouter basename="/amor-update">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/james" element={<Sobre />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
