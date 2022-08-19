import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  Computer,
  Weekend,
  Man,
  Woman,
  ChildFriendly,
  Checkroom,
  DirectionsCar,
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">

          <li className="sidebarListItem">
            <span className="sidebarListItemText">Categories:</span>
          </li>
          <li className="sidebarListItem">
            <Man className="sidebarIcon" />
            <span className="sidebarListItemText">Men</span>
          </li>
          <li className="sidebarListItem">
            <Woman className="sidebarIcon" />
            <span className="sidebarListItemText">Women</span>
          </li>
          <li className="sidebarListItem">
            <ChildFriendly className="sidebarIcon" />
            <span className="sidebarListItemText">Kids</span>
          </li>
          <li className="sidebarListItem">
            <Checkroom className="sidebarIcon" />
            <span className="sidebarListItemText">Clothing</span>
          </li>
          <li className="sidebarListItem">
            <Weekend className="sidebarIcon" />
            <span className="sidebarListItemText">Home</span>
          </li>
          <li className="sidebarListItem">
            <Computer className="sidebarIcon" />
            <span className="sidebarListItemText">Technology</span>
          </li>
          <li className="sidebarListItem">
            <DirectionsCar className="sidebarIcon" />
            <span className="sidebarListItemText">Vehicles</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
