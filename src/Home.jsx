import { Header } from "./includes/Header.jsx";
import "./style/Home.css";

const Home = () => {
  return (
    <>
    <Header />
    <div className="pagina">
      <div className="boven">
        <div className="boven_links">
          <p>Hier komt de image</p>
          {/* Image container */}
        </div>
        <div className="boven_rechts">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, cumque cupiditate molestiae est ipsum perspiciatis neque commodi quaerat reiciendis. Dicta odio dolor voluptates amet fugit quae, impedit corrupti libero. Totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem earum aliquid consequatur odit rem. Officiis sequi iste, non nemo, quisquam quod cupiditate asperiores fugit earum vel officia voluptatum tenetur aliquam.</p>
          {/* Korte introductie  */}
        </div>
      </div>
      <div className="midden">
        {/* Extra uitleg + buttons */}
        <p></p>
        <button></button>
        <button></button>
      </div>
      <div className="onder">
        <div className="onder_links">
          {/* Image spel */}
        </div>
        <div className="onder_rechts">
          {/* Uitleg spel + button */}
          <p></p>
          <button></button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;