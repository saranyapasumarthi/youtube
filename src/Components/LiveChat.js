import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/ChatSlice";

const LiveChat = () => {
    const dispatch = useDispatch();
    const messages = useSelector(store => store.chat.messages);
    useEffect(() => {
        const i = setInterval(() => {
            dispatch(addMessage({
                name: "XYZ",
                message: "Hello"
            }));
        }, 2000);
    return () => clearInterval(i);
    },[])
    return <div className="w-[600px] border border-blue-50 rounded-lg h-[600px] m-2 p-2 overflow-y-scroll flex flex-col-reverse">
        <p>Live Chat</p>
        {messages.map((m,index) => <ChatMessage name={m.name} message={m.message} key={index}/>)}
        
    </div>
};
export default LiveChat;