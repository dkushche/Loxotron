import React from 'react';
import LoxotronCasinoTextComponent from 'components/LoxotronCasinoTextComponent';
import './App.sass';

function App(): JSX.Element {
  return (
    <div className='main'>
      <div className='container'>
        <div className='LoxotronCasinoText'>
          <LoxotronCasinoTextComponent />
          
        </div>
      </div>
    </div>
  );
}

export default App;
