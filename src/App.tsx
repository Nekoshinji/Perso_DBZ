import { useState } from "react";
import "./App.css";
import "./desktop.css"
import Gentils from "./Compenents/Gentils";
import Mechants from "./Compenents/Mechants";
import Header from "./Compenents/Header";
import Footer from "./Compenents/Footer";
import CountDragonBall from "./Compenents/CountDragonBall";

const gentilList = [
  {
    name: "Tortue géniale",
    imgSrc: "../../Images/Gentils/tortuegeniale.jpg",
    Description: "Kamé Sennin, ou Tortue Géniale, est un expert en arts martiaux qui vit sur une petite île au milieu de l'océan. Surnommé le 'maître des tortues', il est le créateur de nombreuses techniques, dont le célèbre Kamehameha, et offre à Son Goku son nuage magique."
  },
  {
    name: "Bulma",
    imgSrc: "../../Images/Gentils/bulma.jpg",
    Description:"Bulma est une jeune adolescente de 16 ans lorsqu'elle découvre la légende des Dragon Balls. Alors en vacances scolaires, elle décide de partir à la recherche des boules afin de réaliser son vœu le plus cher : avoir un fiancé. Équipée d'un radar qu'elle a fabriqué, elle part à la recherche des sept Dragon Balls."
  },
  {
    name: "Goku",
    imgSrc: "../../Images/Gentils/Goku.jpg",
    Description:"Son Goku est un Saiyan, une race guerrière presque disparue. Il est né sur la Planète Vegeta. Son père se prénomme Bardack ou Bardock, sa mère Gine et son frère Raditz. Il a une femme du nom de Chichi, deux fils, Son Gohan et Son Goten, et une petite fille du nom de Pan."
  },
  {
    name: "Piccolo",
    imgSrc: "../../Images/Gentils/piccolo.jpg",
    Description:"Piccolo est un antagoniste majeur devenu un protagoniste majeur dans la franchise Dragon Ball. Il est un Namekian et aussi le dernier enfant et la réincarnation du roi Piccolo, qui deviendra plus tard la réunification du Namekian sans nom après sa fusion avec Kami."
  },
  {
    name: "Vegeta",
    imgSrc: "../../Images/Gentils/vegeta.jpg",
    Description:"Végéta, né en 737 sur la planète Végéta, est un Saiya-Jin de sang pur. Il est également le prince héritier de sa planète natale. Il est arrogant, quelque peu froid et orgueilleux, peut-être trop parfois à tel point que cela l'amène à commettre des erreurs pouvant être nuisibles à toute la Terre."
  },
];

const mechantList = [
  {
    name: "Babidi",
    imgSrc: "../../Images/méchants/babidi.jpg",
    Description:"Babidi est un magicien très puissant, il est aussi le fils de Bibidi le créateur du monstre Boo, alors il décide de ressusciter Boo pour venger la mort de son père. Lorsqu'il arrive sur Terre, il entend parler de guerriers ayant de très grands pouvoirs, alors il décida d'envoyer ses sbires Yamu et Spopovitch récolter leurs énergies."
  },
  {
    name: "Boo",
    imgSrc: "../../Images/méchants/boo.jpg",
    Description:"Il est l'un des principaux antagonistes du manga Dragon Ball et de la série TV Dragon Ball Z. Il était l'un des ennemis les plus puissants auxquels Gokû et ses amis étaient confrontés, c'est aussi l'une des formes de Boo les plus redoutables."
  },
  {
    name: "Cell",
    imgSrc: "../../Images/méchants/cell.jpg",
    Description:"Il a été créé à partir des cellules de tous les plus grands guerriers, comme Son Goku, Végéta, Piccolo... Il a donc été créé dans le futur et est venu jusqu'à notre époque grâce à la machine à voyager de Trunks, le seul but de Cell est de trouver C-17 et C-18 que Trunks avait éliminé dans le futur afin de les absorber et de devenir l'être le plus puissant qui puisse exister dans l'univers."
  },
  {
    name: "Freezer",
    imgSrc: "../../Images/méchants/freezer.jpg",
    Description:"Freezer est dépeint comme un psychopathe, qui savoure la mort d'autrui et la destruction, comme le montre sa jubilation lors de la destruction de la planète Vegeta. Il est même l'un des personnages les plus sadiques de la série et il cherche souvent à faire souffrir ses ennemis avant de les tuer."
  },
  {
    name: "Piccolo daimao",
    imgSrc: "../../Images/méchants/piccolodaimao.jpg",
    Description:"Piccolo Daimaô est l'entité maléfique créée lorsque le fils de Katatts chassa le mal de son cœur afin d'accéder au statut de dieu protecteur de la Terre."
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
      <section>
      <div className="classgentils">
      <h1>Les gentils</h1>
      <article className="gentils">
      <button type="button" onClick={handlePrevClick}>
      ˂
      </button>

      <Gentils gentilsData={gentilList[gentilIndex]} />
      <button type="button" onClick={handleNextClick}>
      ˃
      </button>
      
      </article>
      </div>
      <h1>Les méchants</h1>
      <article className="mechants">
      <button type="button" onClick={PrevClick}>
      ˂
      </button>
      <Mechants mechantsData={mechantList[mechantIndex]} />
      <button type="button" onClick={NextClick}>
      ˃
      </button>
      </article>
      </section>
      <CountDragonBall />
      <Footer />
    </div>
  );
}

export default App;
