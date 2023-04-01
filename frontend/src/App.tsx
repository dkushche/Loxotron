import React from 'react';
import SvgIcons from 'constants/SvgIcons';
import './App.sass';

function App(): JSX.Element {
  return (
    <div className='main'>
      <div className='container'>
        <SvgIcons.loxotronCasinoText/>
      </div>
    </div>
  );
}

export default App;
