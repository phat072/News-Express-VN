import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Login from "./components/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";


function App() {
    return (
        <div>
            <Routes>
                <Route path={''} element={<Header />}>
                    <Route index element={<Home />} />
                </Route>
                <Route path="/Login" element={<Login />}></Route>
            </Routes>
        </div>
    );
}

export default App;