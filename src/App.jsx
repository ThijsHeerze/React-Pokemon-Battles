import React from "react";
import { Route, Routes } from 'react-router-dom';
import PokemonCard from './Pokemon';
import Home from './Home';
import PokemonOverview from './PokemonOverview';
import PokemonBattles from './PokemonBattles';
import './style/App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon-test" element={<><PokemonCard url={"https://pokeapi.co/api/v2/pokemon/1"} /><PokemonCard url={"https://pokeapi.co/api/v2/pokemon/6"} /></> } />
        <Route path="/pokemons" element={<PokemonOverview />} />
        <Route path="/battle" element={<PokemonBattles />} />
      </Routes>
    </>
  );
}

export default App;