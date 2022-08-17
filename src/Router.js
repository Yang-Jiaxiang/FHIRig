import User from "./pages/User";
import Data from "./pages/Data";
import RegisterUser from "./pages/RegisterUser";

const Router = (props) => {
    return (
        <div>
            {props.current === "Data" ? <Data /> : null}
            {props.current === "AllUser" ? <User /> : null}
            {props.current === "RegisterUser" ? <RegisterUser /> : null}
        </div>
    );
};

export default Router;
