import "../style/App.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">

      <div className="navlinks">
        <div className="logo">
        <Link to="/">Logo</Link>
        </div>
      </div>

      <div className="navrechts">
        <Link to="/">Home</Link>
        <Link to="/pokemons">Pokemons</Link>
        <Link to="/prepare">Prepare</Link>
        <Link to="/battle"></Link>
      </div>
    </div>
  );
}

export { Header } ;