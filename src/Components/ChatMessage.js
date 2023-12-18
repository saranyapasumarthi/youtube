const ChatMessage = ({name, message}) => {
    return <div className="flex">
        <img className="w-8 h-8 m-2" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="img" />
        <div className="flex flex-col">
            <span>{name}</span>
            <span>{message}</span>
        </div>
    </div>
};
export default ChatMessage;