import React, { useEffect } from "react";
import { connect } from "react-redux";
import Message from "./Message";

const Result = (props) => {
  const action = {
    type: "UPDATE_CHOICE_WITH_MY_INDEX",
    indexSelected: Math.floor(Math.random() * 4),
  };
  useEffect(() => {
    props.dispatch(action);
    //setInterval(() => props.dispatch(action), 3000);
  });

  return (
    <div>
      <ul>
        {props.houses.map((house) => (
          <li key={house}>{house}</li>
        ))}
      </ul>
      <Message message={props.selectedHouses} />
    </div>
  );
};

export default connect((store) => store)(Result);
