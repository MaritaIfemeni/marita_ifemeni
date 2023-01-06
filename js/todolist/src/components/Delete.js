import React from "react";

function Delete(props) {
  return (
    <div>
      <button onClick={() => props.api.applyTransaction({ remove: [props.node.data]})}>Delete</button>
    </div>
  );
}

export default Delete;
