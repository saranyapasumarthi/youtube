import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/AppSLice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API_URL } from "../Constants";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }
    // useEffect(() => {
    //     const timer = setTimeout(getSearchSuggestions, 200);
    //     return () => {
    //         clearTimeout(timer);
    //     }
    // }, [searchQuery])
    // const getSearchSuggestions = async () => {
    //     const response = await fetch(YOUTUBE_SEARCH_API_URL+ searchQuery);
    //     const json = await response.json();
    // }
    return <div className="flex flex-row justify-between">
        <div className="flex">
            <img className="w-10 h-6 my-3 cursor-pointer"  onClick={toggleMenuHandler} src = "https://i0.wp.com/css-tricks.com/wp-content/uploads/2020/01/hamburger-menu.png?fit=1200%2C600&ssl=1" alt="hamburger"/>
            <img className="w-32 h-6 my-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="youtube" />
        </div>
        <div>
            <input type="text" className="border border-black my-3" 
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />
            <button type="button" className="border-solid bg-red-800 text-white rounded-md p-2 mx-2">Search</button>
         </div>
         <div>
            <img className="w-16 h-10 my-3" src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" alt="user-icon"/>
         </div>
    </div>
};
export default Header;