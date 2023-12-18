import { useSelector } from "react-redux";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
    const isMenuOpen = useSelector(store => store.app).isMenuOpen;
    // Early return pattern
    // if(!isMenuOpen) return;
    return <div className="flex">
       {isMenuOpen ? <SideBar /> : null}
        <Outlet />
    </div>
};
export default Body;