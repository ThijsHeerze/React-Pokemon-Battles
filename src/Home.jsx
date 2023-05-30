import { Header } from "./includes/Header.jsx";
import "./style/Home.css";
import homepageimage from './images/pokemonfoto3.jpg';
import uitlegimage from './images/pokemonfoto1.jpg';

const Home = () => {
  return (
    <>
    <Header />
    <div className="pagina">
      <div className="boven">
        <div className="boven_links">
        <img src={homepageimage} alt="" />
          {/* Image container */}
        </div>
        <div className="boven_rechts">
          <h1>Pokémon Battles</h1>
          <p>Welkom op de website van Pokémon Battles! Wij zijn Aiden, Thijs, en Jasper en we zitten in het tweede jaar van de MBO opleiding Software Development. Voor een schoolproject hebben we besloten een werkende Pokémon game te maken met behulp van React. Hier hebben wij de afgelopen weken erg hard aan gewerkt. Ga gerust naar het volgende kopje voor meer informatie. Alvast veel speelplezier toegewenst!</p>
          {/* Korte introductie  */}
        </div>
      </div>
      <div className="midden">
        {/* Extra uitleg + buttons */}
        <div className="midden_uitleg">
          <h2>Meer info</h2>
          <p>Ben je nog niet bekend met Pokémon en wil je graag weten welke er allemaal zijn? Ga dan naar de 'Pokémons' pagina om ze allemaal te bekijken! Je kan hier ook zoeken naar specifieke Pokémon. Heb je je al voldoende ingelezen? Dan is het tijd om het spel te beginnen! Ga naar de 'Battle' pagina om te starten!</p>
        </div>
        <div className="midden_buttons">
          <button>Pokémons</button>
          <button>Probeer het spel!</button>
        </div>
      </div>
      <div className="onder">
        <div className="onder_links">
          <h2>Hoe werkt het spel?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cum id quis! Dolorem facere dolorum ad expedita voluptates, aspernatur iste ab inventore doloribus recusandae, perferendis quasi, amet explicabo aliquid dolores.</p>
          <button>Kijk deze video!</button>
        </div>
        <div className="onder_rechts">
          {/* Uitleg spel + button */}
          <img src={uitlegimage} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;