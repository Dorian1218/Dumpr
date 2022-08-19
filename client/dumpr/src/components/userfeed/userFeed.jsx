import Post from "../post/Post";
import Share from "../share/Share";
import "./userfeed.css";
import { myPosts } from "../../dummyData";

export default function Feed() {
  return (
    <div className="userfeed">
      <div className="userfeedWrapper">
        <Share />
        {myPosts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
