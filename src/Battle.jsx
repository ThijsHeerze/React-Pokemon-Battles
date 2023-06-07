import React from 'react';
import { Header } from './includes/Header';
import './style/App.css';

const Battle = () => {
  return (
    <>
      <Header />
      <div className="pagina">
        <div className='left'>
          <div className='game'>
            <p>game</p>
          </div>

          <div className="buttons">
            <p>buttons</p>
            <div className='button-player-one'>
                <button>Attack</button>
            </div>
            <div className='button-player-two'>
                <button>Attack</button>
            </div>
            
          </div>
        </div>

        <div className='right'>
          <p>rechts</p>
        </div>
      </div>
    </>
  )
};

export default Battle;