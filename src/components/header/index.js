import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import menuitem from "./menuitem";
import Router from "../../Router.js";

const Header = () => {
    const [current, setCurrent] = useState("Data");

    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <>
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={menuitem}
            />
            <Router current={current} />
        </>
    );
};

export default Header;
