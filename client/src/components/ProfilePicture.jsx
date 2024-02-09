import React from "react";
import pfp from "../assets/me.png";

function ProfilePicture() {
  return (
    <div>
      <img className="pfp" src={pfp} width={250} alt="me" />
    </div>
  );
}

export default ProfilePicture;
