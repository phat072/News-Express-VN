import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Login from "./components/Login/Login.jsx";


function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/Login" element={<Login />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
