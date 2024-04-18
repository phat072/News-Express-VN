import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";


function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/about" element={<h1>About</h1>} />
                <Route path="/services" element={<h1>Services</h1>} />
                <Route path="/contact" element={<h1>Contact</h1>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
