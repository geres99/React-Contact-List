import React from "react";
import "./User.css";

let User = (props) => {
  return (
    <div className="user">
      <img src={props.userData.avatar} alt="loupe"></img>
      <div>
        <div>{props.userData.first_name + " " + props.userData.last_name}</div>
        <div>{props.userData.email}</div>
      </div>
    </div>
  );
};

export default User;
