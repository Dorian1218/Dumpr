import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Userfeed from "../../components/userfeed/userFeed";
import Rightbar from "../../components/rightbar/Rightbar";
import { Button } from "react-bootstrap";
import { UserAuth } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import SidebarMain from "../../components/sidebar/SidebarMain";

export default function Profile() {
  const {logout} = UserAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate('/')
  }
  return (
    <>
      <Topbar />
      <div className="profile">
        <SidebarMain />
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
      <div style={{display: "flex", justifyContent: "center"}}>
      <Button onClick={handleLogout} variant="danger">Logout</Button>
      </div>
    </>
  );
}