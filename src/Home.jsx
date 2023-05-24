import { Header } from "./includes/Header.jsx";
import "./style/Home.css";
import homepageimage from './images/wallpapertest.jpg';

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
          <h1>een h1 ofzo</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, cumque cupiditate molestiae est ipsum perspiciatis neque commodi quaerat reiciendis. Dicta odio dolor voluptates amet fugit quae, impedit corrupti libero. Totam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem earum aliquid consequatur odit rem. Officiis sequi iste, non nemo, quisquam quod cupiditate asperiores fugit earum vel officia voluptatum tenetur aliquam.</p>
          {/* Korte introductie  */}
        </div>
      </div>
      <div className="midden">
        {/* Extra uitleg + buttons */}
        <div className="midden_uitleg">
          <h2>hier komt een h2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptatibus officiis laboriosam dolore hic, reprehenderit ipsam placeat maxime eligendi, unde iusto sunt velit vero magnam voluptatem aut aperiam aspernatur harum!</p>
        </div>
        <div className="midden_buttons">
          <button>ga naar deze pagina</button>
          <button>ga naar deze pagina</button>
        </div>
      </div>
      <div className="onder">
        <div className="onder_links">
          <h2>hier nog een h2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cum id quis! Dolorem facere dolorum ad expedita voluptates, aspernatur iste ab inventore doloribus recusandae, perferendis quasi, amet explicabo aliquid dolores.</p>
          <button>probeer het spel</button>
        </div>
        <div className="onder_rechts">
          {/* Uitleg spel + button */}
          <img src={homepageimage} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;