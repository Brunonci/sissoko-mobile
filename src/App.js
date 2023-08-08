import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.scss';

import Menu from "./Pages/Menu/menu";
import Venta from "./Pages/Venta/venta";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/608456843" element={<Venta />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
