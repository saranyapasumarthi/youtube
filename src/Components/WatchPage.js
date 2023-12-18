import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/AppSLice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsConatiner";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
     dispatch(closeMenu());
    return <div className="flex flex-col">
        <div className="flex">
            <iframe width="1000" height="600" 
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <LiveChat />
        </div>
            <CommentsContainer />
    </div>
};
export default WatchPage;