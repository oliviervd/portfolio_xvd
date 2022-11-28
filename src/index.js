import React from 'react';
import {render} from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css'

import Home from "./components/pages/home";

const rootElement = document.getElementById('root');
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
