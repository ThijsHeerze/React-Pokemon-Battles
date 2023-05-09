import "./style/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return(
    <div className="pagina">
        <div className="navbar">
            <div className="navlinks">
                <div className="logo">
                <Link to="/">Logo</Link>
                </div>
            </div>
            <div className="navrechts">
                <Link to="/pokemon-test">Pokemon test</Link>
                <Link to="/pokemons">Pokemons</Link>
                <Link to="/battle">Battle</Link>
            </div>
        </div>
        <div className=""></div>

    </div>
  );
}

export default Home;