import "./topbar.css"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import TelegramIcon from '@mui/icons-material/Telegram';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Topbar() {
  return (
    <div className="topbarContainer">
        <div className="topbarLeft"></div>
          <span className="logo">Dumpr</span>

        <div className="topbarCenter"></div>
          <div className="searchbar"></div>
            <SearchIcon />
            <input placeholder="Search For Listings" className="searchInput"/>

        <div className="topbarRight"></div>
          <div className="topbarLinks"></div>
            <span className="topbarLinks">Homepage</span>
            <span className="topbarLinks">Timeline</span>

              <div className="topbarIcons"></div>
                <div className="topbarIconItem">
                  <PersonIcon />
                  <span className="topbarIconBadge"></span>
                </div>
                <div className="topbarIconItem">
                  <TelegramIcon />
                  <span className="topbarIconBadge"></span>
                </div>
                <div className="topbarIconItem">
                  <NotificationsIcon />
                  <span className="topbarIconBadge"></span>
                </div>

              <img src="/assets/black crewneck.avif" alt="" className="topbarImg" />
    </div>
  )
}
