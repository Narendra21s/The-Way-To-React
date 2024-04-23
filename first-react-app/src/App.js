import { useState } from "react";
import "./App.css";
import ClassComponents from "./Pages/ClaComponents.jsx";
import FunComponents from "./Pages/FunComponents.jsx";
import { Routes, Route } from "react-router-dom";
import BaseHoc from "./Layouts/BaseHoc.jsx";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <BaseHoc>
            <ClassComponents />
          </BaseHoc>
        }
      />
      {/* <Route path="/functional-component" element={<FunctionComponents />} /> */}
    </Routes>
  );
}

export default App;

// const [name, setName] = useState("Nare");
//  <div className="App">
//       <p>Class components</p>
//       <ClassComponents />
//       <p>Function components</p>
//       <FunComponents />
//       {/* <FunComponents name="Narendra" age={23} */}
//       <FunComponents name={name} age={23} author={"kaylan"} />
//     </div>
