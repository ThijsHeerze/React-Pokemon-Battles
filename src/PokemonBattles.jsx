import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Header } from "./includes/Header.jsx";
import './Pokemon.ts';
import './style/App.css';

function PokemonBattles(){
  // var [pokemon, setPokemons] = useState([]);
  // var [pokemon, getPokemons] = useState([]);
  // var [pokemons, selectPokemons] = useState([]);
  // var [player, setPlayer] = useState([]);
  // var [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch ("https://pokeapi.co/api/v2/pokemon?limit=100")
  //     .then((response) => response.json())
  //     .then((pokemon, player) => {
  //       // setPokemons(pokemon);
  //       setPlayer(player);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) {
  //   return (
  //     <div className="pokemon">
  //       Loading...
  //     </div>
  //   )
  // }

  const { pokemonsP1, pokemonsP2 } = useLocation().state || { pokemonsP1: [], pokemonsP2: [] };

  return (
    <>
      <Header />
      <div className='pokemon-battles'>
        <h1 className='title-battle'>Pokemon Battles</h1>
      </div>

      <div className='container'>
        <div className='player-one'>
          <h2>Player 1</h2>
          <div className='choose-name'><h2>Choose name</h2></div>
            <input type='text' placeholder='enter name'></input>
          <div className='button-choose'>
            <h3>Choose your pokemon</h3>
            <Link to="/pokemons" state={{selectPokemons: true, player: 1, pokemonsP1, pokemonsP2}}>
              <button className='choose-pokemon'>Choose pokemon</button>
            </Link>
            <div className='chosen-pokemon'>
              <h3>Your chosen pokemons:</h3>
              <ul>
                {pokemonsP1 && pokemonsP1.map(pokemon => {
                  return (
                    <li>
                      {pokemon.name}
                    </li>)
                })}
              </ul>
            </div>
          </div>
        </div>

        <div className='player-two'>
          <h2>Player 2</h2>
          <div className='choose-name'><h2>Choose name</h2></div>
            <input type='text' placeholder='enter name'></input>
          <div className='choose-pokemon'>
            <h3>Choose your pokemons</h3>
            <Link to="/pokemons" state={{selectPokemons: true, player: 2, pokemonsP1, pokemonsP2}}>
              <button className='choose-pokemon'>Choose pokemon</button>
            </Link>
            <div className='chosen-pokemon'>
              <h3>Your chosen pokemons:</h3>
              <ul>
                {pokemonsP2 && pokemonsP2.map(pokemon => {
                  return (
                    <li>
                      {pokemon.name}
                    </li>)
                })}
              </ul>
            </div>
          </div>              
        </div>
      </div>

      <div className='start-game'>
        <button className='button-start' 
        //onClick={startGame}
        >Start game</button>
      </div> 
    </>
  );
}

export default PokemonBattles;
