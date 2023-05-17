import { useState } from 'react';
import './style/App.css';

function SearchBar() {
  const [searchInput, setSearchInput] = useState("");

  const searchBar = (pokemons) => {
    const handleChange = (e) => {
      e.preventSetDefault();
    };
    if (searchInput.length > 0){
      pokemons.filter((pokemon) => {
        return pokemon.name.match(searchInput)(
          <input
          type="text"
          placeholder="Search here"
          onChange={handleChange}
          value={searchInput} />
        )
      });
    }
  }
}

export default SearchBar;