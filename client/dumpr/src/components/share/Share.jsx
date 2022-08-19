import "./share.css";
import {PermMedia, Upload, AddToPhotos, Label,Room, EmojiEmotions} from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/Mo.jpg" alt="" />
          <input
            placeholder="Post Listing"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <AddToPhotos htmlColor="#ffbf00" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Upload htmlColor="#ffbf00" className="shareIcon"/>
                    <span className="shareOptionText">Post</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
