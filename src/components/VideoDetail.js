import LikeButtons from "./LikeButtons";

function VideoDetail({videoInfo}) {


    return (
        <div>
            <h1>{videoInfo.title}</h1>
            <h3>{videoInfo.views} Views | Uploaded On {videoInfo.createdAt}</h3>
            <LikeButtons upvotes={videoInfo.upvotes} downvotes={videoInfo.downvotes}/>
        </div>
    )
}

export default VideoDetail;