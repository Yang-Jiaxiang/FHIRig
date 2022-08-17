import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "./components/header/index.js";
import Login from "./pages/Login";

function App() {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="/index" element={<Header />} />
            <Route path="*" element={<Login />} />
        </Routes>
    );
}

export default App;
