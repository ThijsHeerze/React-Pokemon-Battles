import React, { useState } from 'react';
import '../style/App.css';
import '../PokemonOverview.jsx';

const SearchBar = () => {

 const [searchInput, setSearchInput] = useState("");

 const pokemons = [
  fetch("https://pokeapi.co/api/v2/pokemon?limit=100")
  .then((response) => response.json())
  .then((data) => {
    setSearchInput(data);
  })];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    pokemons.filter((pokemon) => {
      return pokemon.name.match(searchInput);
    });
  }

  return(
    <div>
      <input
        type="search"
        placeholder="Search here"
        onChange={handleChange}
        value={searchInput} />

      <table>
        <tr>
          <th>Name</th>
          <th>Image</th>
        </tr>
        {pokemons.map((pokemon) => {
          return (
            <div>
              <tr>
                <td>{pokemon.name}</td>
                <td>{pokemon.image}</td>
              </tr>
            </div>
          )
        })}
      </table>
    </div>
  )
}

export default SearchBar;