import React from 'react';
import LoxotronCasinoTextComponent from 'components/LoxotronCasinoTextComponent';
import './App.sass';
import {LogoComponent} from "./components/LoxotronCasinoLogoComponent";

function App(): JSX.Element {
  return (
    <div className='main'>
      <div className='container'>
        <div className='LoxotronCasinoText'>
          <LoxotronCasinoTextComponent />
        </div>
          <div className='LoxotronCasinoLogo'>
              <LogoComponent />
          </div>
      </div>
    </div>
  );
}

export default App;
