import React from "react";
import { withAuth } from "../lib/AuthProvider";

const MyProfile = ({ user }) => {
  const { first_name, last_name, email } = user;
  return (
    <div>
      <p>First name: {first_name}</p>
      <p>Last name: {last_name}</p>
      <p>Email: {email}</p>
    </div>
  );
};
export default withAuth(MyProfile);
