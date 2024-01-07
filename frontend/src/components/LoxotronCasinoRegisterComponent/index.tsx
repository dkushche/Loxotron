import LoxotronCasinoEntryFormComponent from '../LoxotronCasinoEntryFormComponent';
import './register.sass'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RegisterComponent(): JSX.Element {
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

    await axios.post('http://localhost:7000/register', {
      username,
      password,
    }).then(res => {
      history('/login')
    }).catch(err => console.log(err))
  }

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    handleSubmit();
  };
  return (
    <div className="register">
      <LoxotronCasinoEntryFormComponent
        username={username}
        password={password}
        onChange1={handleUsernameChange}
        onChange2={handlePasswordChange}
        onSubmit={handleButtonClick}
        title={'Create account'}
        supportMessage={{
          text: "Have an account?",
          textForLink: "Log in",
          link: "login"
        }}
      />
    </div>
  )
}
