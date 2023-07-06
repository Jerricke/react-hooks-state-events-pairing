import video from "../data/video.js";
import VideoDetail from "./VideoDetail.js";
import CommentSection from "./CommentSection.js";

function App() {

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoDetail videoInfo={video}/>
      <CommentSection commentInfo={video.comments}/>
    </div>
  );
}

export default App;
