import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
import SidebarMain from "../../components/sidebar/SidebarMain";

export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <SidebarMain />
        <Feed/>
        <Rightbar/>
      </div>
    </>
  );
}
