import LoxotronCasinoEntryFormComponent from '../LoxotronCasinoEntryFormComponent';
import './login.sass'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function LoginComponent(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async () => {

    await axios.post('http://localhost:7000/login', {
      username,
      password,
    }).then(res => {
      history('/game')
    }).catch(err => console.log(err))
  }

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleSubmit();
  };
  return (
      <div className='login'>
        <LoxotronCasinoEntryFormComponent
          username={username}
          password={password}
          onChange1={handleUsernameChange}
          onChange2={handlePasswordChange}
          onSubmit={handleButtonClick}
          title={'Sign in'}
          supportMessage={{
            text: "No account?",
            link: "register",
            textForLink: "Create one"
          }}
        />
      </div>
  )
}
