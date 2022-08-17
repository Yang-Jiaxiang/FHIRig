import React, { useEffect, useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [paassword, setPassword] = useState("");

    return (
        <div>
            <h1>Login</h1>
            <input
                type="text"
                name="username"
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />
            <input
                type="text"
                name="password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />

            <button
                onClick={() => {
                    window.location.href = "index";
                }}
            >
                Login
            </button>
        </div>
    );
};

export default Login;
