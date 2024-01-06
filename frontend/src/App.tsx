import './App.sass';
import RegisterComponent from './components/LoxotronCasinoRegisterComponent';
import LoginComponent from './components/LoxotronCasinoLoginComponent';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

function App(): JSX.Element {
  return (
    <div className='main'>
      <div className='container'>
        <Routes>
          <Route path='/register' element={<RegisterComponent />}/>
          <Route path='/login' element={<LoginComponent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
