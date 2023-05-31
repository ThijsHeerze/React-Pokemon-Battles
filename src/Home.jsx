import { Header } from "./includes/Header.jsx";
import "./style/Home.css";
import homepageimage from './images/pokemonfoto3.jpg';
import uitlegimage from './images/pokemonfoto1.jpg';
import { Link } from "react-router-dom";

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
          <Link to="../pokemons">
            <button>Pokémons</button>
          </Link>
          <Link to="../battle">
            <button>Probeer het spel!</button>
          </Link>
        </div>
      </div>
      <div className="onder">
        <div className="onder_links">
          <h2>Hoe werkt het spel?</h2>
          <p>Wanneer je op de 'Battle' pagina komt krijgen beide spelers de optie om een gebruikersnaam en maximaal 5 Pokémon te kiezen. Zodra het spel start, krijgen de spelers om de beurt een kans op een attack te doen op de Pokémon van de tegenstander. Daarna is de andere speler aan de beurt. Wie het eerst de 5 Pokémon van de ander verslaat, wint het spel. Als je behoefte hebt aan een visuele demonstratie, neem dan een kijkje naar de video hieronder.</p>
          <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
            <button>Kijk deze video!</button>
          </Link>
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