import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Header } from './includes/Header';
import Pokemon from './Pokemon.ts';
import './style/App.css';

const Battle = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [pokemonsP1, setPokemonsP1] = useState([]);
  const [pokemonsP2, setPokemonsP2] = useState([]);
  const [pokemonP1, setPokemonP1] = useState(null);
  const [pokemonP2, setPokemonP2] = useState(null);
  let loadedPokemons = false;

  useEffect(() => {
    if(!location.state) {
      // navigate("/prepare");
    }

    if(loadedPokemons) {
      Pokemon.create(pokemonsP1[0].url)
        .then((data) => setPokemonP1(data));
      
      Pokemon.create(pokemonsP2[0].url)
      .then((data) => setPokemonP2(data));
    }

    setPokemonsP1(location.state.pokemonsP1);
    setPokemonsP2(location.state.pokemonsP2);

    console.log("Pokemon");
    console.log(pokemonP1);
    console.log(pokemonP2);

    // setPokemonsP1(location.state.pokemonsP1.map(async (pokemonData) => await Pokemon.create(pokemonData.url)));
    // setPokemonsP2(location.state.pokemonsP2.map(async (pokemonData) => await Pokemon.create(pokemonData.url)));


    // console.log(pokemonsP1);
    // console.log(pokemonsP2);
  }, []);

  if(!pokemonsP1[0] && !pokemonsP2[0]) {
    return (
      <p>loading...</p>
    )
  } else {
    loadedPokemons = true;
  }

  console.log("Pokemonsss");
  console.log(pokemonsP1[0]);
  console.log(pokemonsP2[0]);
  
  return (
    <>
      <Header />
      <div className="pagina">
        <div className='left'>
          <div className='game'>
            <p>game</p>
            <div className="p1">
              <p>Player 1</p>
              <img src={pokemonsP1[0].sprites.back_default} alt="Back default pokemon player 1" />
            </div>

            <div className="p2">
              <p>Player 2</p>
              <img src={pokemonsP2[0].sprites.front_default} alt="Front default pokemon player 2" />
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
            <div className="attack-info">Attack 1 info
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid optio, maiores dicta amet aliquam totam. Velit delectus atque nulla tempora?</p>
            </div>
            <div className="attack-info">Attack 2 info
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nisi quia dolorem quaerat error exercitationem tempore quod minima voluptate nulla? Sunt labore ratione necessitatibus officia earum similique deleniti sapiente?</p>
            </div>
            <div className="attack-info">Attack 3 info
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas sit delectus suscipit nam? Iusto, quae? Eveniet, aliquid ea. Repudiandae quia provident assumenda dolorem ex.</p>
            </div>
            <div className="attack-info">Attack 4 info
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nam repellat necessitatibus magnam quos, cum quasi ullam odio animi.</p>
            </div>
        </div>
      </div>
    </>
  )
};

export default Battle;