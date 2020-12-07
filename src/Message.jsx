import React from "react";

const Message = (props) => {
  return (
    <div>
      <b>{props.message && props.message}</b>
    </div>
  );
};

export default Message;
