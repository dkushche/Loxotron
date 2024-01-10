import './App.sass';
import RegisterComponent from './components/LoxotronCasinoRegisterComponent';
import LoginComponent from './components/LoxotronCasinoLoginComponent';
import { Navigate, Route, Routes } from 'react-router-dom';
import GameComponent from './components/LoxotronCasinoGameComponent/GameComponent/GameComponent';

function App(): JSX.Element {
  return (
    <div className='main'>
      <div className='container'>
        <Routes>
        <Route path='/register' element={<RegisterComponent />}/>
        <Route path='/login' element={<LoginComponent />} />
          <Route path='/game' element={<GameComponent />}/>
        <Route path='*' element={<Navigate to='/game' />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
