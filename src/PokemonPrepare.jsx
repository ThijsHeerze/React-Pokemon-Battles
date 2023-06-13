import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { Header } from "./includes/Header.jsx";
import './style/App.css';

const capitalizeName = (name) => name[0].toUpperCase() + name.slice(1, name.length);

function PokemonPrepare() {
  const MINIMAL_POKEMON_COUNT = 1;
  const location = useLocation();
  let pokemonsP1;
  let pokemonsP2;

  if(location.state === null) {
    console.log("location is null");
    pokemonsP1 = [];
    pokemonsP2 = [];
  } else {
    pokemonsP1 = location.state.pokemonsP1;
    pokemonsP2 = location.state.pokemonsP2;
  }

  console.log("prepare");
  console.log(pokemonsP1);
  console.log(pokemonsP2);

  return (
    <>
      <Header />
      <div className="battle-img">
        <div className='pokemon-battles'>
          <h1 className='title-battle'>Pokemon Battles</h1> 
        </div>

      <div className='wrapper'>
        <div className='container'>
          
          <div className='players'>
            <div className='player-one'>
              <h2>Player 1</h2>
              <div className='choose-name'><h2>Choose name</h2></div>
              <input type='text' placeholder='enter name'></input>

              <div className='choose-pokemon'>
                <h3>Choose your pokemon</h3>
                <Link to="/pokemons" state={{selectPokemons: true, player: 1, pokemonsP1: pokemonsP1, pokemonsP2: pokemonsP2}}>
                  <button className='button'>Choose pokemon</button>
                </Link>

                <div className='chosen-pokemon'>
                  <h3>Your chosen pokemons:</h3>
                  <ul>
                    {pokemonsP1 && pokemonsP1.map((pokemon) => {
                      return (
                        <li>
                          <div>
                            <b><p>{capitalizeName(pokemon.name)}</p></b>
                            <img src={pokemon.sprites.front_default} alt="" srcset="" />
                          </div>
                        </li>
                      )
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
                <Link to="/pokemons" state={{selectPokemons: true, player: 2, pokemonsP1: pokemonsP1, pokemonsP2: pokemonsP2}}>
                  <button className='button'>Choose pokemon</button>
                </Link>

                <div className='chosen-pokemon'>
                  <h3>Your chosen pokemons:</h3>
                  <ul>
                    {pokemonsP2 && pokemonsP2.map((pokemon) => {
                      return (
                        <li>
                          <div>
                            <b><p>{capitalizeName(pokemon.name)}</p></b>
                            <img src={pokemon.sprites.front_default} alt="" srcset="" />
                          </div>
                        </li>
                      )
                    })}
                    </ul>
                </div>
                </div>
              </div>
            </div>
            <div className='start-game'>
              <Link to="/battle" state={{pokemonsP1, pokemonsP2}}>
                <button className='button button-start' 
                //onClick={startGame}
                >Start game</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokemonPrepare;
