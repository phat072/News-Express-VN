import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import HeadLines from "./components/HeadLines.jsx";


function App() {

    return (
        <>
            <Router>
                {/*<Home />*/}
                <HeadLines />
                <Routes>
                    <Route path='/' element />
                </Routes>
            </Router>
        </>
    )
}

export default App