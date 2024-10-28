import { useState } from "react";
import "./App.css";
import Gentils from "./Compenents/Gentils";
import Mechants from "./Compenents/Mechants";
import Header from "./Compenents/Header";
import Footer from "./Compenents/Footer";
import CountDragonBall from "./Compenents/CountDragonBall";

const gentilList = [
  {
    name: "Tortue géniale",
    imgSrc: "../../Images/Gentils/tortuegeniale.jpg",
  },
  {
    name: "Bulma",
    imgSrc: "../../Images/Gentils/bulma.jpg",
  },
  {
    name: "Goku",
    imgSrc: "../../Images/Gentils/Goku.jpg",
  },
  {
    name: "Piccolo",
    imgSrc: "../../Images/Gentils/piccolo.jpg",
  },
  {
    name: "Vegeta",
    imgSrc: "../../Images/Gentils/vegeta.jpg",
  },
];

const mechantList = [
  {
    name: "Babidi",
    imgSrc: "../../Images/méchants/babidi.jpg",
  },
  {
    name: "Boo",
    imgSrc: "../../Images/méchants/boo.jpg",
  },
  {
    name: "Cell",
    imgSrc: "../../Images/méchants/cell.jpg",
  },
  {
    name: "Freezer",
    imgSrc: "../../Images/méchants/freezer.jpg",
  },
  {
    name: "Piccolo daimao",
    imgSrc: "../../Images/méchants/piccolodaimao.jpg",
  },
];


function App() {
  const [gentilIndex, setGentilIndex] = useState(0);

  const handlePrevClick = () => {
    if (gentilIndex > 0) {
      setGentilIndex(gentilIndex - 1);
    }
  };
  const handleNextClick = () => {
    if (gentilIndex < gentilList.length - 1) {
      setGentilIndex(gentilIndex + 1);
    }
  };

  const [mechantIndex, setMechantIndex] = useState(0);

  const PrevClick = () => {
    if (mechantIndex > 0) {
      setMechantIndex(mechantIndex - 1);
    }
  };
  const NextClick = () => {
    if (mechantIndex < mechantList.length - 1) {
      setMechantIndex(mechantIndex + 1);
    }
  };







  return (
    <div>
      <Header />
      <Gentils gentilsData={gentilList[gentilIndex]} />
      <button type="button" onClick={handlePrevClick}>
        Precedent
      </button>
      <button type="button" onClick={handleNextClick}>
        Suivant
      </button>
      <Mechants mechantsData={mechantList[mechantIndex]} />
      <button type="button" onClick={PrevClick}>
        Precedent
      </button>
      <button type="button" onClick={NextClick}>
        Suivant
      </button>
      <CountDragonBall />
      <Footer />
    </div>
  );
}

export default App;
