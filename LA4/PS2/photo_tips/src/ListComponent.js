import React from "react";

const ListComponent = ({ tip }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
      }}
    >
      <div>
        <h3>{tip.author}</h3>
      </div>
      <div>
        <h3>{tip.tip}</h3>
      </div>
    </div>
  );
};

export default ListComponent;
