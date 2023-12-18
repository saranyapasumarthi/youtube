const commentsData = [
    {
        name: "X",
        text: "Hi",
        replies: [
            {
                name: "Y",
                text: "hi ra",
                replies: [
                    {
                        name: "X",
                        text: "ela vunnav",
                        replies:[]
                    }
                ]
            }
        ]
    },
    {
        name: "Y",
        text: "Hi",
        replies: [
            {
                name: "X",
                text: "hi ra",
                replies: [
                    {
                        name: "Y",
                        text: "ela vunnav",
                        replies:[]
                    }
                ]
            }
        ]
    }
]

const Comment = ({ data }) => {
    const { name, text } = data;
    return <div className="flex">
        <img className="w-8 h-8 mx-2" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg" alt="img" />
        <div className="flex flex-col bg-gray-300 w-full h-auto p-1">
            <p className="font-bold text-xl">{name}</p>
            <p>{text}</p>
        </div>
    </div>
}

const CommentsList = ({comments}) => {
    return <>{comments.map(c => 
         <div>
            <Comment data={c} />
            <div className="px-5 border-l-gray-700">
                <CommentsList comments={c.replies} />
            </div>
        </div>
        )}
        </>
}
const CommentsContainer = () => {
    return <div>
        <h1 className="py-2 m-2">Comments...</h1>
        <CommentsList comments={commentsData} />
    </div>
};
export default CommentsContainer;