import React, { useState } from "react";

const Ratings = () => {
  const [menu, setMenu] = useState("myRatings");

  const toggleHandlerMyRatings = () => {
    setMenu("myRatings");
  };
  const toggleHandlerAllUnrated = () => {
    setMenu("allUnrated");
  };

  const toggleHandlerRandomUnrated = () => {
    setMenu("randomUnrated");
  };

  return (
    <>
      <div className="ratings">
        <button
          onClick={() => toggleHandlerMyRatings()}
          className={
            menu === "myRatings"
              ? "btn btn-sign btn-sign--active"
              : "btn btn-sign"
          }
        >
          My ratings
        </button>
        <button
          onClick={() => toggleHandlerAllUnrated()}
          className={
            menu === "allUnrated"
              ? "btn btn-sign btn-sign--active"
              : "btn btn-sign"
          }
        >
          Not rated yet
        </button>
        <button
          onClick={() => toggleHandlerRandomUnrated()}
          className={
            menu === "randomUnrated"
              ? "btn btn-sign btn-sign--active"
              : "btn btn-sign"
          }
        >
          Random unrated
        </button>
      </div>

      {menu === "myRatings" && <h1>My ratings</h1>}
      {menu === "allUnrated" ? <h1>allUnrated</h1> : null}
      {menu === "randomUnrated" ? <h1>Random</h1> : null}
    </>
  );
};
export default Ratings;
