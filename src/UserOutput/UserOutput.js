import React from 'react';
import "./UserOutput.css";

const useroutput = (props) => {
    return (
      <div>
        <p onClick={props.click}>test {props.userName}</p>
        <p>test 2</p>
      </div>
    )
};

export default useroutput;
