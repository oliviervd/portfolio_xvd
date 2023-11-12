import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./assets/css/App.css";
import "./assets/css/grid.css";
import Home from "./components/pages/home";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: Infinity }, // set cache time to 24hrs
  },
});

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </QueryClientProvider>
  </BrowserRouter>,
  rootElement,
);
