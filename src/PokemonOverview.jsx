import { useEffect, useState } from 'react';
import PokemonCard from './Pokemon';
import './style/App.css';

function PokemonOverview() {
  var [pokemons, setPokemons] = useState([]);
  var [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
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

  const getNextResults = () => {
    if(getLastPokemonIdFromArray(pokemons.results) >= 1000) {
      return;
    }

    setLoading(true);

    fetch(pokemons.next)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
        setLoading(false);
      });
    
  };

  const getPreviousResults = () => {
    setLoading(true);
    fetch(pokemons.previous)
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data);
        setLoading(false);
      })
  };

  const previousDisabled = pokemons.previous == null;
  const nextDisabled = pokemons.next == null;

  return (
    <div className="pokemon">
      <h1 className="pokemon-list">Pokedex</h1>
      <div>
          <p>{getFirstPokemonIdFromArray(pokemons.results)} tot {getLastPokemonIdFromArray(pokemons.results)} (1000 totaal)</p>
          <button className='button' onClick={getPreviousResults} disabled={previousDisabled}>Vorige</button>
          <button className='button' onClick={getNextResults} disabled={nextDisabled}>Volgende</button>
        </div>
      <div className='pokemon-list'>
        {pokemons.results.map(pokemon => {
          return (
            <PokemonCard url={pokemon.url} />
          )
        })}
      </div>
    </div>
  );
}

export default PokemonOverview;