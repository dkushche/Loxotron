import './App.sass';
import RegisterComponent from './components/LoxotronCasinoRegisterComponent';
import LoginComponent from './components/LoxotronCasinoLoginComponent';
import { Navigate, Route, Routes } from 'react-router-dom';

function App(): JSX.Element {
  return (
    <div className='main'>
      <div className='container'>
        <Routes>
          <Route path='/register' element={<RegisterComponent />}/>
          <Route path='/login' element={<LoginComponent />} />
          <Route path='*' element={<Navigate to='/game' />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
