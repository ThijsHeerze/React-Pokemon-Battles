import React, { useState, useEffect } from 'react';
import './style/Pokemon.css';

const capitalizeName = (name) => name[0].toUpperCase() + name.slice(1, name.length);

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    // console.log("test");
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);
  
  return (
    <>
      {pokemon && <div id={pokemon.name} className="pokemon-card">
        <p className="name">
          <b>{capitalizeName(pokemon.name) + ` (#${pokemon.id})`}</b>
        </p>
        <img className="sprite" src={pokemon.sprites.front_default} alt={capitalizeName(pokemon.name) + " Front Default Sprite"} />
      </div>}
    </>
  );
}

export default PokemonCard;