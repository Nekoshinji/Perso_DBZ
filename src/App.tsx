import { useState } from "react";
import "./App.css";
import Gentils from "./Compenents/Gentils";
import Mechants from "./Compenents/Mechants";

function App() {
  const [count, setCount] = useState(0);

  return (
      <div>
       <Gentils />
       <Mechants /> 
      </div>
  );
}

export default App;
