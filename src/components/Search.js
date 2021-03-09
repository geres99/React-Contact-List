import React from "react";
import "./Search.css";

let Search = (props) => {
  return (
    <div className="bar">
      <img
        className="loupe"
        src={process.env.PUBLIC_URL + "/images/loupe.svg"}
        alt="loupe"
      ></img>
      <input
        className="searchInput"
        onChange={(e) => {
          props.setInputValue(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;
