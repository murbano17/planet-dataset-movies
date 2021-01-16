const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user) {
    return { Authorization: "Bearer " + user };
  } else {
    return {};
  }
};

export default authHeader;
