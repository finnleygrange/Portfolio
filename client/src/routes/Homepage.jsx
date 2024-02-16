import "./root.css";
import Header from "../components/Header";
import SocialLinks from "../components/SocialLinks";
import Projects from "./Projects";
import ProfilePicture from "../components/ProfilePicture";

function Root() {
  return (
    <>
      <div className="root">
        <div className="profile">
          <ProfilePicture />
        </div>
        <div className="header">
          <Header />
        </div>
        <div className="link">
          <SocialLinks />
        </div>
      </div>
    </>
  );
}

export default Root;
