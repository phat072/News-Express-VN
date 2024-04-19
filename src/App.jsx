import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Logo from "./components/Logo/Logo.jsx";


function App() {
    return (
        <div>
            <Routes>
            </Routes>
            <Logo />
            <Footer />
        </div>
    );
}

export default App;
