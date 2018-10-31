import React from "react";

const Col = props => {
  const otherclasses = props.otherclasses ? props.otherclasses : "";
  return (
    <div className={"col s" + props.size + " " + otherclasses}>
      {props.children}
    </div>
  );
};

export default Col;
