import "../style/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return(
      <div className="pagina">

          <div className="navbar">

              <div className="navlinks">
                  <div className="logo">
                  <Link to="/">Logo</Link>
                  </div>
              </div>
              
              <div className="navrechts">
                  <Link to="../pokemon-test">Pokemon test</Link>
                  <Link to="../pokemons">Pokemons</Link>
                  <Link to="../battle">Battle</Link>
              </div>
          </div>
  
      </div>
    );
  }

export { Header } ;