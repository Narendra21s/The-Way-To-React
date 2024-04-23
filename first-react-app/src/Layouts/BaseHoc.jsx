import React from "react";

const BaseHoc =
  (Component) =>
  ({ ...props }) => {
    return (
      <div>
        <h1>This is navbar</h1>
        <Component {...props} />
      </div>
    );
  };
export default BaseHoc;
