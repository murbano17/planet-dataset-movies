import React, { useState } from "react";
import EditProfile from "../components/EditProfile";
import MyProfile from "../components/MyProfile";

import { withAuth } from "../lib/AuthProvider";

const Profile = (props) => {
  const [profile, setProfile] = useState(true);

  const toggleHandlerProfile = () => {
    setProfile(true);
  };
  const toggleHandlerEditProfile = () => {
    setProfile(false);
  };

  return (
    <div className="profile">
      {profile ? (
        <h2 className="profile__welcome">My profile</h2>
      ) : (
        <h2 className="profile__welcome">Edit Profile</h2>
      )}

      <div className="profile__buttons-container">
        <button
          onClick={() => toggleHandlerProfile()}
          className={profile ? "btn btn-sign btn-sign--active" : "btn btn-sign"}
        >
          Profile
        </button>
        <button
          onClick={() => toggleHandlerEditProfile()}
          className={profile ? "btn btn-sign" : "btn btn-sign btn-sign--active"}
        >
          Edit profile
        </button>
      </div>
      {profile ? <MyProfile /> : <EditProfile />}
    </div>
  );
};
export default withAuth(Profile);
