import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from "./includes/Header.jsx";
import PokemonCard from './PokemonCard';
import './style/App.css';

function PokemonOverview() {
  var [pokemons, setPokemons] = useState([]);
  var [loading, setLoading] = useState(true);
  var [searchInput, setSearchInput] = useState("");
  let { selectPokemons, player, pokemonsP1, pokemonsP2 } = useLocation().state || { selectPokemons: false, player: 0, pokemonsP1: [], pokemonsP2: [] };

  useEffect(() => {
    console.log("reloading...");

    if(searchInput.length === 0) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
        .then((response) => response.json())
        .then((data) => {
          setPokemons(data);
          setLoading(false);

          if(selectPokemons) {
            document.documentElement.addEventListener("click", (e) => {
              const selectedPokemons = []
              document.querySelectorAll('.pokemon-card.selected').forEach((pokemon) => {
                selectedPokemons.push(pokemon.id);
              });

              if(player === 1) {
                pokemonsP1 = selectedPokemons;
                console.log("Pokemons P1");
                console.log(pokemonsP1);
              } else if(player === 2) {
                pokemonsP2 = selectedPokemons;
                console.log("Pokemons P2");
                console.log(pokemonsP2);
              }
            });
          }
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
              <PokemonCard url={pokemon.url} selectable={selectPokemons} />
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