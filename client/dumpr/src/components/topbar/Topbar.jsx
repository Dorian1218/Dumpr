import "./topbar.css";
import { Search, Bookmark, Chat, Notifications } from "@mui/icons-material";
import {BrowserRouter as Router, Link} from 'react-router-dom';
import { Dashboard } from "../dashboard/Dashboard"
import { UserAuth } from "../../context/UserContext";

export default function Topbar() {
  const {user} = UserAuth()
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to="/Home">
        <span className="logo">Dumpr.</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Bookmark />
          </div>
          <div className="topbarIconItem">
            <Link to="/chat"><Chat/></Link>
          </div>
          <div className="topbarIconItem">
            <Notifications />
          </div>
        </div>
        <Link to="/Profile">
        <img src="/assets/person/Mo.jpg" alt="" className="topbarImg"/>
        </Link>
      </div>
    </div>
  );
}
