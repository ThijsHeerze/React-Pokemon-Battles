import { useEffect, useState } from 'react';
import { Header } from "./includes/Header.jsx";
import './style/App.css';
import './Pokemon.ts';
import './PokemonOverview.jsx';

function PokemonBattles(){
    var [pokemon, setPokemons] = useState([]);
    var [pokemon, getPokemons] = useState([]);
    //var [pokemons, selectPokemons] = useState([]);
    var [player, setPlayer] = useState([]);
    var [loading, setLoading] = useState(true);

useEffect(() => {
    fetch ("https://pokeapi.co/api/v2/pokemon?limit=100")
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

  const getFirstPokemonIdFromArray = (pokemons) => {
    const pokemon = pokemons[0];
    let test = pokemon.url.split("/");

    test = test.filter((str) => str !== '');
    return test[test.length-1];
  };

  const getLastPokemonIdFromArray = (pokemons) => {
    const pokemon = pokemons[pokemons.length-1];
    let test = pokemon.url.split("/");

    test = test.filter((str) => str !== '');
    return test[test.length-1];
  };

  const choosePokemons = (pokemons) => {
    return pokemons;
  }

  const chosenPokemons = () => {

  }

  
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
            <h5>max:5</h5>
            <button className='choose-pokemon'>Choose pokemon</button>
            <div className='chosen-pokemon'>
              <h3>Your chosen pokemons:</h3>
            </div>
          </div>
        </div>

        <div className='player-two'>
          <h2>Player 2</h2>
          <div className='choose-name'><h2>Choose name</h2></div>
            <input type='text' placeholder='enter name'></input>
          <div className='choose-pokemon'>
            
            <h3>Choose your pokemons</h3>
            <h5>max:5</h5>
            <button className='button-choose'>Choose pokemon</button>
            <div className='chosen-pokemon'>
              <h3>Your chosen pokemons:</h3>
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
  
