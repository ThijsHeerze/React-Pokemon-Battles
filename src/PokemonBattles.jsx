import { useEffect, useState } from 'react';
import { Header } from "./includes/Header.jsx";
import './style/App.css';
import './Pokemon.ts';

function PokemonBattles(){
    var [pokemon, setPokemons] = useState([]);
    //var [pokemons, selectPokemons] = useState([]);
    var [player, setPlayer] = useState([]);
    var [loading, setLoading] = useState(true);

useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((pokemon, player) => {
        setPokemons(pokemon);
        setPlayer(player);
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

  
  return (
    <>
    <Header />
      <div className='pokemon-battles'>
        <h1 className='title-battle'>Pokemon Battles</h1>
      </div>
      <div className='select-pokemon'></div>
      <div className='set-pokemon'></div>
      <div className='set-team'></div>
    </>
  );
}
  export default PokemonBattles;
  
