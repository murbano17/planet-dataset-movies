import React, { useState } from "react";
import { MyRatings } from "../components/MyRatings";
import NotRated from "../components/NotRated";
import RandomUnrated from "../components/RandomUnrated";

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

      {menu === "myRatings" && <MyRatings />}
      {menu === "allUnrated" && <NotRated />}
      {menu === "randomUnrated" && <RandomUnrated />}
    </>
  );
};
export default Ratings;
