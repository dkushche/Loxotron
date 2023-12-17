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
              <LogoComponent width={500} height={500} />
          </div>
      </div>
    </div>
  );
}

export default App;
