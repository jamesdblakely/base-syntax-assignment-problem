import React from 'react';
import "./UserOutput.css";

const useroutput = (props) => {
    return (
      <div className="card">
        <p onClick={props.click}>test {props.userName}</p>
        <p>{props.bottom} 2</p>
      </div>
    )
};

export default useroutput;
