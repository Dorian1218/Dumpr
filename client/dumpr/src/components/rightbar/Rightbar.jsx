import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <img className="rightbarAd" src="assets/audi-ad.webp" alt="" />
        <img className="rightbarAd" src="assets/pizza-ad.jpg" alt="" />
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">Brands You Like</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/adidas-logo.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Adidas</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/nike-logo.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Nike</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/xbox-logo.webp"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Xbox</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/apple-logo.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Apple</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/beats-logo.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Beats</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/logitech-logo.jpeg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Logitech</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
