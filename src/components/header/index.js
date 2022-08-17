import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Adminmenuitem, Usermenuitem } from "./menuitem";

import LoginUser from "../../login_user.json";

const Header = () => {
    const [current, setCurrent] = useState("Data");

    const onClick = (e) => {
        setCurrent(e.key);
    };

    //獲取URL提供給Header的current
    useEffect(() => {
        setCurrent(window.location.pathname.substring(1));
    }, [window.location.pathname]);

    return (
        <>
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={Adminmenuitem}
            />
        </>
    );
};

export default Header;
