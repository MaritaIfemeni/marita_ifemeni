import React from "react";

function Message(props) {

  return (
    <div>
     {props.message.lenght > 10 ? "Too long" : props.message}
    </div>
  );
}

export default Message;
