import { useEffect, useState } from 'react';
import './style/App.css';

function PokemonBattles(){
    var [pokemons, setPokemons] = useState([]);
    var [loading, setLoading] = useState(true);


useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
        setLoading(false);
      });
  }, []);

if (loading) {
    return (
      <div className="pokemon">
        Loading...
      </div>
    )
  }
}
  export default PokemonBattles;