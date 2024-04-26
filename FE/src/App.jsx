import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage.jsx";
import Login from "./components/Login/Login.jsx";
import Home from "./pages/Home/Home.jsx";
import ErrorPage from "./pages/404Page/ErrorPage.jsx";
import Search from './pages/Search/Search';


function App() {
    return (
        <div>
            <Routes>
                    <Route path={'/error-page'} element={<ErrorPage />} />
                    <Route path={''} element={<MainPage />}>
                    <Route index element={<Home />} />
                    <Route path={'search/:search_title'} element={<Search />} />
                    </Route>
                <Route path="/Login" element={<Login />}></Route>
            </Routes>
        </div>
    );
}

export default App;