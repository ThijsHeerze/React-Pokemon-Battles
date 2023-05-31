import React, { useState, useEffect } from 'react';
import './style/Pokemon.css';

const capitalizeName = (name) => name[0].toUpperCase() + name.slice(1, name.length);

const PokemonCard = ({ url, selectable = false }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);

  const select = (e) => {
    if(!selectable) {
      return;
    }
    
    const elem = e.currentTarget;
    if(elem.classList.contains('selected')) {
      elem.classList.remove('selected');
    } else {
      elem.classList.add('selected');
    }

  };
  
  return (
    <>
      {pokemon && <div id={pokemon.name} onClick={select} className="pokemon-card">
        <p className="name">
          <b>{capitalizeName(pokemon.name) + ` (#${pokemon.id})`}</b>
        </p>
        <img className="sprite" src={pokemon.sprites.front_default} alt={capitalizeName(pokemon.name) + " Front Default Sprite"} />
      </div>}
    </>
  );
}

export default PokemonCard;