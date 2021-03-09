import React from "react";
import "./Search.css";

let Search = () => {
  return (
    <div className="bar">
      <img
        className="loupe"
        src={process.env.PUBLIC_URL + "/images/loupe.svg"}
        alt="loupe"
      ></img>
      <input />
    </div>
  );
};

export default Search;
