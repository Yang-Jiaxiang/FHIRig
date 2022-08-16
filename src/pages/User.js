import React from "react";
import { Space, Table, Tag } from "antd";
import columns from "../components/user/columns";
import data from "../userData";

const User = () => {

    const style = {
        margin: "20px auto ",
        width: "90%",
    }

    return (
        <div>
            <Table columns={columns} dataSource={data} style={style}/>
        </div>
    );
};

export default User;
