import React from 'react';

const useroutput = (props) => {
    return (
      <div>
        <p>test {props.userName}</p>
        <p onClick={ props.click }>test 2</p>
      </div>
    )
};

export default useroutput;
