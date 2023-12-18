import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_API_URL } from "../Constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const getVideos = async () => {
        const response = await fetch(YOUTUBE_API_URL);
        const data = await response.json();
        setVideos(data.items);
    }
    useEffect(() =>{
        getVideos();
    },[]);
   
    return <div className="flex flex-wrap">
        {videos.map(v => <Link to={"/watch?v="+v.id} key={v.id}><VideoCard info={v} /></Link>)}
    </div>
};
export default VideoContainer;