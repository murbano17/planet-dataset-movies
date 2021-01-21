import React from "react";
import { withAuth } from "../../lib/AuthProvider";

const MyProfile = ({ user }) => {
  const { first_name, last_name, email } = user;
  return (
    <div className="profile__my-profile">
      <p className="profile__my-profile-info">
        <span className="profile__my-profile-label">First name:</span>{" "}
        <p className="profile__name">{first_name}</p>
      </p>
      <p className="profile__my-profile-info">
        <span className="profile__my-profile-label">Last name:</span>{" "}
        <p className="profile__name">{last_name}</p>
      </p>
      <p className="profile__my-profile-info">
        <span className="profile__my-profile-label">Email: </span>
       {email}
      </p>
    </div>
  );
};
export default withAuth(MyProfile);
