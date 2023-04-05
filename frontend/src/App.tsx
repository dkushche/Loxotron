import React from 'react';
import LoxotronCasinoTextComponent from 'components/LoxotronCasinoTextComponent';
import ButtonComponent from 'components/ButtonComponent';
import './App.sass';

function App(): JSX.Element {
  return (
    <div className='main'>
      <div className='container'>
        <div className='LoxotronCasinoText'>
          <LoxotronCasinoTextComponent />
        </div>
        <ButtonComponent text='submit' />
      </div>
    </div>
  );
}

export default App;
