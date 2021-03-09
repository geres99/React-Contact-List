import React from "react";
import "./User.css";

let User = (props) => {
  let [inputChecked, setInputChecked] = React.useState(false);

  let onInputClick = () => {
    setInputChecked(!inputChecked);
    if (inputChecked === false) {
      props.setInputsChecked([...props.inputsChecked, props.userData.id]);
      console.log([...props.inputsChecked, props.userData.id]);
    } else {
      props.setInputsChecked(
        props.inputsChecked.filter((x) => x !== props.userData.id)
      );
      console.log(props.inputsChecked.filter((x) => x !== props.userData.id));
    }
  };

  if (props.userData.avatar !== null) {
    return (
      <div className="user" onClick={onInputClick}>
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
      <div className="user" onClick={onInputClick}>
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
