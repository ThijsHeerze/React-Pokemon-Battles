import { Header } from "./includes/Header.jsx";
import { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import './style/App.css';

function PokemonOverview() {
  var [pokemons, setPokemons] = useState([]);
  var [loading, setLoading] = useState(true);
  var [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    // const isFiltered = searchInput.length > 0;
    // console.log(isFiltered);
    
    console.log("reloading...");

    if(searchInput.length === 0) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
        .then((response) => response.json())
        .then((data) => {
          setPokemons(data);
          setLoading(false);
        });
    }
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

  const handleChange = (e) => {
    e.preventDefault();

    console.log("searchInput:", searchInput);
    console.log("search:", e.target);
    setSearchInput(e.target.value);
    console.log("searchvalue:", e.target.value);
    console.log("searchInput:", searchInput);
  };

  const Pokemons = () => {
    const isFiltered = searchInput.length > 0;
    return;
    if(!isFiltered) {
      return (
        <>
        {
          pokemons.results.map(pokemon => {
            return (
              <PokemonCard url={pokemon.url} />
            )
          })
        }
        </>
      )
    } 

    console.log(pokemons);
    pokemons.results.filter((pokemon) => pokemon.name.includes(searchInput.toLowerCase()));
    
    return (
      <>
      {
        pokemons.results.map(pokemon => {
          return (
            <PokemonCard url={pokemon.url} />
          )
        })
      }
      </>
    )
  }

  return (
    <>
    <Header/>
    
      <div className="pokemon">
        <h1 className="pokemon-list">Pokedex</h1>
        <div className="SearchBar">
          {/* <SearchBar/> */}
          <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            disabled
            // value={searchInput}
          />
        </div>
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
          {/* <Pokemons/> */}
        </div>
        <div>
          <button className='button' onClick={getPreviousResults} disabled={previousDisabled}>Vorige</button>
          <button className='button' onClick={getNextResults} disabled={nextDisabled}>Volgende</button>
        </div>
      </div>
    </>
  );
}

export default PokemonOverview;