import { Space, Table, Tag } from "antd";

const columns = [
    {
        title: "name",
        dataIndex: "name",
        key: "name",
        render: (text) => <a>{text}</a>,
    },
    {
        title: "Age",
        dataIndex: "age",
        key: "age",
    },
    {
        title: "Email",
        dataIndex: "email",
        key: "email",
    },
    {
        title: "League",
        key: "league",
        dataIndex: "league",
    },
    {
        title: "Action",
        key: "action",
        render: (_, record) => (
            <Space size="middle">
                <a
                    style={{ color: "#fc86ad" }}
                    onClick={() => {
                        console.log(record);
                    }}
                >
                    Delete
                </a>
            </Space>
        ),
    },
];

export default columns;
