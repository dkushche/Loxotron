import React from 'react';
import LoxotronCasinoTextComponent from 'components/LoxotronCasinoTextComponent';
import './App.sass';
import LoxotronCasinoLogoComponent from "components/LoxotronCasinoLogoComponent"
import LoxotronCasinoButtonComponent from "./components/LoxotronCasinoButtonComponent"
import LoxotronCasinoInputFieldComponent from './components/LoxotronCasinoInputFieldComponent';
import LoxotronCasinoEntryFormComponent from './components/LoxotronCasinoEntryFormComponent';

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
        <div className="LoxotronCasinoButton">
          <LoxotronCasinoButtonComponent text={'Button'} />
        </div>
        <div className="LoxotronCasinoInputField">
          <LoxotronCasinoInputFieldComponent />
        </div>
        <LoxotronCasinoEntryFormComponent title={'Create account'} backendEndpoint={''} supportMessage={{ text: "No account?", link: "Create one"}} />
      </div>
    </div>
  );
}

export default App;
