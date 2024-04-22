import "./App.css";
import ClassComponents from "./components/ClaComponents.jsx";
import FunComponents from "./components/FunctionComponents.jsx";

function App() {
  return (
    <div className="App">
      <p>Class components</p>
      <ClassComponents />
      <p>Function components</p>
      <FunComponents />
    </div>
  );
}

export default App;
