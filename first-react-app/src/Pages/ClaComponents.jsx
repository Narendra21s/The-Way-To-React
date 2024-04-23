import React from "react";
import BaseHoc from "../Layouts/BaseHoc";

class ClassComponents extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Class">
        <header className="class-header">
          <p>This is Class components</p>
        </header>
      </div>
    );
  }
}

export default BaseHoc(ClassComponents);
