import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Userfeed from "../../components/userfeed/userFeed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/mo+ned.png"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/Mo.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="profileRightBottom">
            <Userfeed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}