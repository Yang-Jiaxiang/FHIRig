import { Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Header from "./components/header/index.js";
import Login from "./pages/Login";
import PageLayout from "./PageLayout";
import User from "./pages/User";
import Data from "./pages/Data";
import RegisterUser from "./pages/RegisterUser";

function App() {
    return (
        <Routes>
            <Route index element={<Login />} />
            <Route path="/" element={<PageLayout />}>
                <Route path="/users" element={<User />} />
                <Route path="/RegisterUser" element={<RegisterUser />} />
                <Route path="/Data" element={<Data />} />
            </Route>
            <Route path="*" element={<Login />} />
        </Routes>
    );
}

export default App;
