import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from './includes/Header';
import Pokemon from './Pokemon.ts';
import './style/App.css';

const Battle = () => {
  const [loadedPokemon, setLoadedPokemon] = useState(false);
  const [pokemonP1, setPokemonP1] = useState(null);
  const [pokemonP2, setPokemonP2] = useState(null);
  const [pokemonP1Hp, setPokemonP1Hp] = useState(0);
  const [pokemonP2Hp, setPokemonP2Hp] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
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
        navigate("/prepare");
        setLoadedPokemon(true);
        
        return { pokemon1: null, pokemon2: null };
      } else {
        let pokemon1 = null;
        let pokemon2 = null;
        
        try {
          pokemon1 = await Pokemon.create(pokemonP1Url);
          setPokemonP1Hp(pokemon1.hp);
        } catch(e) {
          console.error(e);
        }

        try {
          pokemon2 = await Pokemon.create(pokemonP2Url);
          setPokemonP2Hp(pokemon2.hp);
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
    
    console.log("Battle");
    console.log(pokemonP1);
    console.log(pokemonP2);
  }, []);

  if(!loadedPokemon) {
    return ("Loading pokemon...");
  }

  console.log("Pokemonsss");
  console.log(pokemonP1);
  console.log(pokemonP2);

  const attackPokemon = (playerNumber, attacker, victim, move) => {
    // Attack pokemon and update HP
    attacker.attackPokemon(move, victim);
    setPokemonP1Hp(pokemonP1.hp);
    setPokemonP2Hp(pokemonP2.hp);

    // Disable buttons
    const attackerButtons = document.querySelectorAll(`.button-attackp${playerNumber}`);
    const victimButtons = document.querySelectorAll(`.button-attackp${playerNumber === 1 ? 2 : 1}`);
    attackerButtons.forEach((button) => button.setAttribute("disabled", ""));
    victimButtons.forEach((button) => button.removeAttribute("disabled"));
    
    // Create turn info text
    const infoPanel = document.querySelector(".right");
    const divElem = document.createElement("div");
    const infoElem = document.createElement("p");

    divElem.classList.add("attack-info");
    infoElem.innerText = `${attacker.name} used ${move.name}, taking away ${move.power} hp from ${victim.name}!`;

    if(victim.hp === 0) {
      infoElem.innerText += `\n${victim.name} fainted!`
      victimButtons.forEach((button) => button.setAttribute("disabled", ""));

      const victimImage = document.querySelector(`img.player${playerNumber === 1 ? 2 : 1}`);
      victimImage.classList.add("dead");
    }

    divElem.appendChild(infoElem);
    infoPanel.appendChild(divElem);
  }
  
  return (
    <>
      <Header />
      <div className="pagina">
        <div className='left'>
          <div className='game'>
            {/* <p>game</p> */}
            <div className="p1">
              <p className='name'>{pokemonP1.name}</p>
              <p className='hp'>HP: {pokemonP1Hp}/{pokemonP1.maxHp}</p>
              <img className='player1' src={pokemonP1.sprites.back_default} alt="Back default pokemon player 1" />
              {/* <img className='player1' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png" alt="Back default pokemon player 1" /> */}
            </div>

            <div className="p2">
              <p className='name'>{pokemonP2.name}</p>
              <p className='hp'>HP: {pokemonP2Hp}/{pokemonP2.maxHp}</p>
              <img className='player2' src={pokemonP2.sprites.front_default} alt="Front default pokemon player 2" />
              {/* <img className='player2' src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" alt="Front default pokemon player 2" /> */}
            </div>
          </div>

          <div className="buttons">
            <p>{pokemonP1.name}</p>
            <div className='attack'>
              <button className='button-attackp1' onClick={() => attackPokemon(1, pokemonP1, pokemonP2, pokemonP1.moves[0])} >
                <b>{pokemonP1.moves[0].name}</b>
                <br />
                <small>Power: {pokemonP1.moves[0].power}</small>
                <br />
                <small>PP: {pokemonP1.moves[0].pp}</small>
              </button>
              <button className='button-attackp1' onClick={() => attackPokemon(1, pokemonP1, pokemonP2, pokemonP1.moves[1])} >
                <b>{pokemonP1.moves[1].name}</b>
                <br />
                <small>Power: {pokemonP1.moves[1].power}</small>
                <br />
                <small>PP: {pokemonP1.moves[1].pp}</small>
              </button>
              <button className='button-attackp1' onClick={() => attackPokemon(1, pokemonP1, pokemonP2, pokemonP1.moves[2])} >
                <b>{pokemonP1.moves[2].name}</b>
                <br />
                <small>Power: {pokemonP1.moves[2].power}</small>
                <br />
                <small>PP: {pokemonP1.moves[2].pp}</small>
              </button>
              <button className='button-attackp1' onClick={() => attackPokemon(1, pokemonP1, pokemonP2, pokemonP1.moves[3])} >
                <b>{pokemonP1.moves[3].name}</b>
                <br />
                <small>Power: {pokemonP1.moves[3].power}</small>
                <br />
                <small>PP: {pokemonP1.moves[3].pp}</small>
              </button>
            </div>

            <p>{pokemonP2.name}</p>
            <div className='attack'>
                <button className='button-attackp2' onClick={() => attackPokemon(2, pokemonP2, pokemonP1, pokemonP2.moves[0])} >
                <b>{pokemonP2.moves[0].name}</b>
                <br />
                <small>Power: {pokemonP2.moves[0].power}</small>
                <br />
                <small>PP: {pokemonP2.moves[0].pp}</small>
              </button>
              <button className='button-attackp2' onClick={() => attackPokemon(2, pokemonP2, pokemonP1, pokemonP2.moves[1])} >
                <b>{pokemonP2.moves[1].name}</b>
                <br />
                <small>Power: {pokemonP2.moves[1].power}</small>
                <br />
                <small>PP: {pokemonP2.moves[1].pp}</small>
              </button>
              <button className='button-attackp2' onClick={() => attackPokemon(2, pokemonP2, pokemonP1, pokemonP2.moves[2])} >
                <b>{pokemonP2.moves[2].name}</b>
                <br />
                <small>Power: {pokemonP2.moves[2].power}</small>
                <br />
                <small>PP: {pokemonP2.moves[2].pp}</small>
              </button>
              <button className='button-attackp2' onClick={() => attackPokemon(2, pokemonP2, pokemonP1, pokemonP2.moves[3])} >
                <b>{pokemonP2.moves[3].name}</b>
                <br />
                <small>Power: {pokemonP2.moves[3].power}</small>
                <br />
                <small>PP: {pokemonP2.moves[3].pp}</small>
              </button>
            </div>
            
          </div>
        </div>

        <div className='right'>
          <div className="info">General info: 
            <p>Now both players have selected a Pokémon, it's time to battle! You can see your Pokémon and your opponent's Pokémon in the battlefield in the top-left of your screen. You and your opponent will take turns to attack. The player who takes down the Pokémon of their opponent, wins! Below the battlefield, you can see which attacks you can use. There's attack 1 through 4, and all 4 attacks have different uses. Continue reading to get to know more about the attack's strengths and limits!</p>
          </div>
          </div>
        </div>
    </>
  )
};

export default Battle;