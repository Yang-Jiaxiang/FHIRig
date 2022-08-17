import {
    UserSwitchOutlined,
    DatabaseOutlined,
    LogoutOutlined,
} from "@ant-design/icons";

//提供admin Header
export const Adminmenuitem = [
    {
        label: <a href="/Data">資料集</a>,
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
                label: <a href="/Users">使用者清單</a>,
            },
            {
                key: "RegisterUser",
                label: <a href="/RegisterUser">使用這註冊</a>,
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

