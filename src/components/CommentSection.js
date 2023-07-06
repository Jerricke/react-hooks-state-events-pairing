import {useState} from "react";
import LikeButtons from "./LikeButtons";
import CommentSearchBar from "./CommentSearchBar";
import CommentAdder from "./CommentAdder";

function CommentSection({commentInfo}) {
    const [commentList, setCommentList] = useState(commentInfo)
    const [isDisplay, setIsDisplay] = useState(false)
    const [searchQuery, setSearchQuery] = useState("");
    const [isAlphabetical, setIsAlphabetical] = useState(false)

    function searchFilter(query) {
        setSearchQuery(query);
    }

    function commentListUpdater(newComment) {
        setCommentList([...commentList, newComment])
    }

    const newCommentDisplay = commentList.filter( (comment) => {
        if (searchQuery === "") return true
        else {
            if (comment.user.toLowerCase().includes(searchQuery.toLowerCase())) {
                return true
            } else return false
        }
    })

    const sortedNewCommentDisplay = newCommentDisplay.sort((a,b) => {
        if (isAlphabetical) {
            return a.user.localeCompare(b.user)
        } else return newCommentDisplay
    })

    return (
        <div>
            <button onClick={()=> setIsDisplay(!isDisplay)}>{!isDisplay ? "Show Comments" : "Hide Comments"}</button>
            <div 
            style={{display: (isDisplay) ? "block" : "none"}}
            className="comments">
                <CommentSearchBar searchQuery={searchQuery} searchFilter={searchFilter} className="commentSearchBar"/>
                <CommentAdder commentListUpdater={commentListUpdater}/>
                <button className="sortBtn" onClick={()=>setIsAlphabetical(!isAlphabetical)}>Sort by A-Z : {isAlphabetical? "yes" : "no"}</button>
                {sortedNewCommentDisplay.map( (comment) => (
                    <div className="comment" key={comment.id}> 
                        <h3>{comment.user}</h3>
                        <p>{comment.comment}</p>
                        <LikeButtons upvotes={0} downvotes={0}></LikeButtons>
                        <button onClick={(e)=> e.target.parentElement.remove() }>❌</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommentSection;
