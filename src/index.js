import React from 'react';
import {render} from "react-dom";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import './index.css';
import './App.css'

import Home from "./components/pages/home";
import NarrativeContentHome from "./components/pages/narrativeContentHome";
import BrandedContentHome from "./components/pages/brandedContentHome";
import ClientSpace from "./components/pages/clientSpace";

const rootElement = document.getElementById('root');
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/narrative" element={<NarrativeContentHome/>} />
            <Route path="/branded" element={<BrandedContentHome/>} />
            <Route path="/client-space" element={<ClientSpace/>} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
