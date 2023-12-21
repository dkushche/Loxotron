import React from 'react';
import LoxotronCasinoTextComponent from 'components/LoxotronCasinoTextComponent';
import './App.sass';
import LoxotronCasinoLogoComponent from "components/LoxotronCasinoLogoComponent"
import LoxotronCasinoButtonComponent from "./components/LoxotronCasinoButtonComponent"

function App(): JSX.Element {
  return (
    <div className='main'>
      <div className='container'>
        <div className='LoxotronCasinoText'>
          <LoxotronCasinoTextComponent />
        </div>
          <div className='LoxotronCasinoLogo'>
              <LoxotronCasinoLogoComponent />
          </div>
          <div className='LoxotronCasinoButton'>
              <LoxotronCasinoButtonComponent text={'qwertyuio'} />
          </div>
      </div>
    </div>
  );
}

export default App;
