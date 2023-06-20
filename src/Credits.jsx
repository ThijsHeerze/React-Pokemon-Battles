import { Header } from "./includes/Header";
import './style/credits.css';

const Credits = () => {
    return (
      <>
      <Header />
      
      <div className="credits_pagina">
        <div className="credits_container">
          <h1>Developers</h1>
          <p>Thijs Heerze - Front & Backend Developer</p>
          <p>Aiden Raaphorst - Backend Developer</p>
          <p>Jasper de Beijer - Frontend Developer</p>
          <h1>Images</h1>
          <p>Google Images - Pokémon wallpapers</p>
          <h1>Videos</h1>
          <p>The Official Pokémon YouTube channel - How to Play Pokémon TCG Tutorial</p>
        </div>
      </div>
      </>
    )
  }
  
  export default Credits;