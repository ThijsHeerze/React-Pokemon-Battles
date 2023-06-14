import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Header } from "./includes/Header.jsx";
import './style/App.css';

const capitalizeName = (name) => name[0].toUpperCase() + name.slice(1, name.length);

function PokemonPrepare() {
  const [loadedPokemon, setLoadedPokemon] = useState(false);
  const [pokemonP1, setPokemonP1] = useState(null);
  const [pokemonP2, setPokemonP2] = useState(null);
  const location = useLocation();
  let pokemonP1Url = "";
  let pokemonP2Url = "";

  if(location.state !== null) {
    pokemonP1Url = location.state.pokemonP1Url;
    pokemonP2Url = location.state.pokemonP2Url;
  }
  
  useEffect(() => {
    const fetchPokemon = async () => {
      if(location.state === null) {
        console.log("location is null");
        setLoadedPokemon(true);
        
        return { pokemon1: null, pokemon2: null };
      } else {
        let pokemon1 = null;
        let pokemon2 = null;
        
        try {
          const response1 = await fetch(pokemonP1Url);
          pokemon1 = await response1.json();
        } catch(e) {
          console.error(e);
        }

        try {
          const response2 = await fetch(pokemonP2Url);
          pokemon2 = await response2.json();
        } catch(e) {
          console.error(e);
        }
        console.log("fetched pokemon data");
        
        setLoadedPokemon(true);
        return { pokemon1: pokemon1, pokemon2: pokemon2 };
      }
    };

    fetchPokemon()
      .then((response) => {
        console.log("pokemon1:");
        console.log(response.pokemon1);
        console.log("pokemon2:");
        console.log(response.pokemon2);

        setPokemonP1(response.pokemon1);
        setPokemonP2(response.pokemon2);
        
        console.log("done");
      });
  
    console.log("prepare");
    console.log(pokemonP1);
    console.log(pokemonP2);
  }, []);

  
  if(!loadedPokemon) {
    return ("Loading pokemon...");
  }

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
                <Link to="/pokemons" state={{selectPokemons: true, player: 1, pokemonP1Url, pokemonP2Url}}>
                  <button className='button'>Choose pokemon</button>
                </Link>

                <div className='chosen-pokemon'>
                  <h3>Your chosen pokemons:</h3>
                  <ul>
                    {pokemonP1 &&
                      (
                        <li>
                          <div>
                            <b><p>{capitalizeName(pokemonP1.name)}</p></b>
                            <img src={pokemonP1.sprites.front_default} alt="" srcset="" />
                          </div>
                        </li>
                      )
                    }
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
                <Link to="/pokemons" state={{selectPokemons: true, player: 2, pokemonP1Url, pokemonP2Url}}>
                  <button className='button'>Choose pokemon</button>
                </Link>

                <div className='chosen-pokemon'>
                  <h3>Your chosen pokemons:</h3>
                  <ul>
                    {pokemonP2 &&
                      (
                        <li>
                          <div>
                            <b><p>{capitalizeName(pokemonP2.name)}</p></b>
                            <img src={pokemonP2.sprites.front_default} alt="" srcset="" />
                          </div>
                        </li>
                      )
                    }
                    </ul>
                </div>
                </div>
              </div>
            </div>
            <div className='start-game'>
              <Link to="/battle" state={{pokemonP1Url, pokemonP2Url}}>
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
