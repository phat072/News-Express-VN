import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";


function App() {
    return (
        <div>
            <Header />
            <Routes>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
