import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/index";

const PageLayout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <div style={{ marginTop: "0px" }}>
                <Header />
            </div>
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default PageLayout;
