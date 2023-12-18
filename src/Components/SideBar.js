import { Link } from "react-router-dom";

const SideBar = () => {
    return <div className="p-5 shadow-lg w-48">
        <ul>
            <Link to={"/"}><li>Home</li></Link>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
        <div>
            <p className="font-bold text-xl">Subscriptions</p>
            <ul>
                <li>Music</li>
                <li>Trending</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
        <div>
            <p className="font-bold text-xl">Watch Later</p>
            <ul>
                <li>Music</li>
                <li>Trending</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    </div>
};
export default SideBar;