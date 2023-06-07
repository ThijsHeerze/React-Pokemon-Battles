import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import PokemonOverview from './PokemonOverview';
import PokemonPrepare from './PokemonPrepare';
import Battle from './Battle';
import Testing from './Testing';
import './style/App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemons" element={<PokemonOverview />} />
        <Route path="/prepare" element={<PokemonPrepare />} />
        <Route path="/battle" element={<Battle />} />
        <Route path="/testing" element={<Testing />} />
      </Routes>
    </>
  );
}

export default App;