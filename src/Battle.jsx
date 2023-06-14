import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from './includes/Header';
import Pokemon from './Pokemon.ts';
import './style/App.css';

const Battle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pokemonP1, setPokemonP1] = useState(null);
  const [pokemonP2, setPokemonP2] = useState(null);
  const [loadedPokemons, setLoadedPokemon] = useState(false);
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
          // const response1 = await fetch(pokemonP1Url);
          // pokemon1 = await response1.json();

          pokemon1 = await Pokemon.create(pokemonP1Url);
        } catch(e) {
          console.error(e);
        }

        try {
          // const response2 = await fetch(pokemonP2Url);
          // pokemon2 = await response2.json();
          pokemon2 = await Pokemon.create(pokemonP2Url);
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
    
    
    
    
    
    if(!location.state) {
      // navigate("/prepare");
    }
    
    if(loadedPokemons) {
      Pokemon.create(pokemonP1Url).then((pokemon) => setPokemonP1(pokemon));
      Pokemon.create(pokemonP2Url).then((pokemon) => setPokemonP2(pokemon));
    }

    // setPokemonP1(location.state.pokemonsP1);
    // setPokemonP2(location.state.pokemonsP2);

    console.log("Pokemon");
    console.log(pokemonP1);
    console.log(pokemonP2);

    // setPokemonP1(async () => await Pokemon.create(pokemonP1))
    // setPokemonsP1(location.state.pokemonsP1.map(async (pokemonData) => await Pokemon.create(pokemonData.url)));
    // setPokemonsP2(location.state.pokemonsP2.map(async (pokemonData) => await Pokemon.create(pokemonData.url)));


    // console.log(pokemonsP1);
    // console.log(pokemonsP2);
  }, []);

  // if(!pokemonP1 && !pokemonP2) {
  //   return (
  //     <p>loading...</p>
  //   )
  // } 
  // else {
  //   loadedPokemons = true;
  // }

  console.log("Pokemonsss");
  console.log(pokemonP1);
  console.log(pokemonP2);
  
  return (
    <>
      <Header />
      <div className="pagina">
        <div className='left'>
          <div className='game'>
            <p>game</p>
            <div className="p1">
              <p>Player 1</p>
              {/* <img className='player1' src={pokemonP1.sprites.back_default} alt="Back default pokemon player 1" /> */}
              <img className='player1' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" alt="Back default pokemon player 1" />
            </div>

            <div className="p2">
              <p>Player 2</p>
              {/* <img className='player2' src={pokemonP2.sprites.front_default} alt="Front default pokemon player 2" /> */}
              <img className='player2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="Front default pokemon player 2" />
            </div>
          </div>

          <div className="buttons">
            <p>Player 1</p>
            <div className='attack'>
                <button className='button-attack' >ATTACK MOVE 1</button>
                <button className='button-attack' >ATTACK MOVE 2</button>
                <button className='button-attack' >ATTACK MOVE 3</button>
                <button className='button-attack' >ATTACK MOVE 4</button>
            </div>

            <p>Player 2</p>
            <div className='attack'>
                <button className='button-attackp2' >ATTACK MOVE 1</button>
                <button className='button-attackp2' >ATTACK MOVE 2</button>
                <button className='button-attackp2' >ATTACK MOVE 3</button>
                <button className='button-attackp2' >ATTACK MOVE 4</button>
            </div>
            
          </div>
        </div>

        <div className='right'>
          <p></p>
            <div className="info">General info: 
                <p>Now both players have selected a Pokémon, it's time to battle! You can see your Pokémon and your opponent's Pokémon in the battlefield in the top-left of your screen. You and your opponent will take turns to attack. The player who takes down the Pokémon of their opponent, wins! Below the battlefield, you can see which attacks you can use. There's attack 1 through 4, and all 4 attacks have different uses. Continue reading to get to know more about the attack's strengths and limits!</p>
            </div>
            <div className="attack-info">Attack 1:
                <p>Attack 1 is a quick, weaker attack that doesn't take a lot of energy to use. Can be used to energy-efficiently chip down your opponent's HP, doing a small test to see how much HP the opponent's Pokémon has, or finishing a Pokémon off without having to waste a lot of energy on bigger attacks.</p>
            </div>
            <div className="attack-info">Attack 2:
                <p>Attack 2 is a stronger and more energy-requiring attack that deals elemental damage. If you're using a Fire type, you will deal fire damage to your opponent. How effective the elemental damage will be, depends on your opponent's Pokémon's resistance to it. Can be used to get ahead of your opponent by taking your Pokémon's type to your advantage.</p>
            </div>
            <div className="attack-info">Attack 3:
                <p>Attack 3 is a powerful attack that will deal tons of damage to your opponent's Pokémon. But it will also nearly completely deplete your energy meter. It's a powerful move with clear limits. Use it to catch up with your opponent when it comes do damage, or use it when good energy management is not your priority.</p>
            </div>
            <div className="attack-info">Attack 4:
                <p>Attack 4 is the strongest attack in your arsenal. Not only does it do a lot of damage, it also gives you an extra turn! You can only use this attack once a match, so be careful with how you use it!</p>
            </div>
        </div>
      </div>
    </>
  )
};

export default Battle;