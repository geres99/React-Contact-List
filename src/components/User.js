import React from "react";
import "./User.css";

let User = (props) => {
  let [inputChecked, setInputChecked] = React.useState(false);

  if (props.userData.avatar !== null) {
    return (
      <div
        className="user"
        onClick={() => {
          setInputChecked(!inputChecked);
        }}
      >
        <img
          className="avatar"
          src={props.userData.avatar}
          alt={props.userData.first_name[0] + " " + props.userData.last_name[0]}
        ></img>
        <div>
          <div>
            {props.userData.first_name + " " + props.userData.last_name}
          </div>
          <div>{props.userData.email}</div>
        </div>
        <div className="spaceFiller"></div>
        <input type="checkbox" disabled checked={inputChecked} />
      </div>
    );
  } else {
    return (
      <div
        className="user"
        onClick={() => {
          setInputChecked(!inputChecked);
        }}
      >
        <div className="noImage">
          <div>
            {props.userData.first_name[0] + props.userData.last_name[0]}
          </div>
        </div>
        <div>
          <div>
            {props.userData.first_name + " " + props.userData.last_name}
          </div>
          <div>{props.userData.email}</div>
        </div>
        <div className="spaceFiller"></div>
        <input type="checkbox" disabled checked={inputChecked} />
      </div>
    );
  }
};

export default User;
