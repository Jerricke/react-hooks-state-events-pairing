import {useState} from "react";

function LikeButtons({upvotes, downvotes}) {
    const [numUpvotes, setNumUpvotes] = useState(upvotes)
    const [numDownvotes, setNumDownvotes] = useState(downvotes);

    return (
        <div>
            <button onClick={() => setNumUpvotes(numUpvotes+1)}>{numUpvotes} 👍</button>
            <button onClick={() => setNumDownvotes(numDownvotes+1)}>{numDownvotes} 👎</button>
        </div>
    )
}

export default LikeButtons;