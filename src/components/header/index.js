import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import { Adminmenuitem, Usermenuitem } from "./menuitem";
import Router from "../../Router.js";

import LoginUser from "../../login_user.json";

const Header = () => {
    const [current, setCurrent] = useState("Data");

    const onClick = (e) => {
        setCurrent(e.key);
    };

    return (
        <>
            {
                //判斷使用者為admin 顯示使用這管理，不是admin則為普通用戶顯示資料庫與登出
            }
            {LoginUser.userType === "admin" ? (
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={Adminmenuitem}
                />
            ) : (
                <Menu
                    onClick={onClick}
                    selectedKeys={[current]}
                    mode="horizontal"
                    items={Usermenuitem}
                />
            )}

            {
                //下方為Router
            }
            <Router current={current} />
        </>
    );
};

export default Header;
