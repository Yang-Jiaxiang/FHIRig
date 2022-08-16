import User from "./pages/User";
import Data from "./pages/Data";

const Router = (props) => {
    return (
        <div>
            {props.current === "Data" ? <Data /> : null}
            {props.current === "User" ? <User /> : null}
        </div>
    );
};

export default Router;
