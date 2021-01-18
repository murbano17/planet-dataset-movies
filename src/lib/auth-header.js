const authHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user) {
    return "Bearer " + user;
  } else {
    return "";
  }
};

export default authHeader;
