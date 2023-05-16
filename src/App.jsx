import React from "react";
import { Route, Routes } from 'react-router-dom';
import Testing from './Testing';
import Home from './Home';
import PokemonOverview from './PokemonOverview';
import PokemonBattles from './PokemonBattles';
import './style/App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon-test" element={<Testing/>} />
        <Route path="/pokemons" element={<PokemonOverview />} />
        <Route path="/battle" element={<PokemonBattles />} />
      </Routes>
    </>
  );
}

export default App;