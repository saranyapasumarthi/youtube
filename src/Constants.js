const YOUTUBE_API_KEY = "AIzaSyBjNs6f4X92jv_xMQLO7JddgXj7u8E3CrQ";

export const YOUTUBE_API_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${YOUTUBE_API_KEY}`;

export const YOUTUBE_SEARCH_API_URL = "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=";