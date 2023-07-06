import {useState} from 'react';
import {v4 as uuid} from "uuid";

function CommentAdder({commentListUpdater}) {
    const [username, setUsername] = useState("")
    const [addComment, setAddComment] = useState("")

    const newComment = {
        id: uuid(),
        user: username,
        comment: addComment,
    }

    return(
        <>
            <form className="commentAdder" onSubmit={e => {
                e.preventDefault();
                if (username && addComment){
                    commentListUpdater(newComment)
                    setUsername("")
                    setAddComment("")
                }   else alert("please fill out the form")
                }}>
                <p>Username: 
                <span>
                    <input 
                    className="commentField"
                    type="text" 
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                </span>
                </p>
                <p>Comment:  
                <span>
                    <input 
                    className="commentField"
                    type="text" 
                    value={addComment}
                    onChange={(e)=>setAddComment(e.target.value)}
                    />
                </span>
                </p>
                <button id="commentSubmit" type="submit">Add Comment!</button>
            </form>
        </>
    )
}

export default CommentAdder;