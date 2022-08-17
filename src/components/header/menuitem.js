import {
    UserSwitchOutlined,
    DatabaseOutlined,
    LogoutOutlined,
} from "@ant-design/icons";

//提供admin Header
export const Adminmenuitem = [
    {
        label: "資料集",
        key: "Data",
        icon: <DatabaseOutlined />,
    },
    {
        label: "使用者",
        key: "User",
        icon: <UserSwitchOutlined />,
        children: [
            {
                key: "AllUser",
                label: "所有使用者",
            },
            {
                key: "RegisterUser",
                label: "使用者註冊",
            },
        ],
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
];

//提供普通用戶 Header
export const Usermenuitem = [
    {
        label: "資料集",
        key: "Data",
        icon: <DatabaseOutlined />,
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
];
