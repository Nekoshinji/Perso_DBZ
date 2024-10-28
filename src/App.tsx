import { useState } from "react";
import "./App.css";
import Gentils from "./Compenents/Gentils";
import Mechants from "./Compenents/Mechants";
import Header from "./Compenents/Header";
import Footer from "./Compenents/Footer";
import CountDragonBall from "./Compenents/CountDragonBall";

function App() {

  return (
      <div>
        <Header />
       <Gentils />
       <Mechants /> 
       <CountDragonBall />
       <Footer />
      </div>
  );
}

export default App;
