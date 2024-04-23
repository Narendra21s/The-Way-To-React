import React, { useState } from "react";
import BaseHoc from "../Layouts/BaseHoc";

function FunComponents(props) {
  const [count, setCount] = useState(0);
  // const [changeName, setChangename] = useState("");
  const reduce = () => {
    setCount(count - 1);
  };
  return (
    <div className="fun">
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={reduce}>decrement</button>
      <h2>{count}</h2>
      <h3>My name is:{props.name}</h3>
      <h3>age:{props.age}</h3>
    </div>
  );
}

export default BaseHoc(FunComponents);

// props :{
//  name:"Narendra",
// age:23
// }
