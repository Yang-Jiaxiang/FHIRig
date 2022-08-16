import {
    UserSwitchOutlined,
    DatabaseOutlined,
    LogoutOutlined,
} from "@ant-design/icons";

const menuitem = [
    {
        label: "資料集",
        key: "Data",
        icon: <DatabaseOutlined />,
    },
    {
        label: "使用者",
        key: "User",
        icon: <UserSwitchOutlined />,
    },
    {
        label: (
            <a href="/Login" rel="noopener noreferrer">
                登出
            </a>
        ),
        key: "SignOut",
        icon: <LogoutOutlined />,
    },
    {},
];

export default menuitem;
