import LoxotronCasinoEntryFormComponent from '../LoxotronCasinoEntryFormComponent';
import './login.sass'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../../config';
import { ErrorComponent } from '../LoxotronCasinoErrorComponent';

export default function LoginComponent(): JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorText, setErrorText] = useState<string | null>(null);
  const history = useNavigate();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async () => {

    await axios.post(`${config.backend_url}/login`, {
      username,
      password,
    }).then(res => {
      history('/game')
    }).catch(err => {
      setErrorText(err.response.data.message)
    })
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
          inputMinLength={5}
        />
        {errorText && <ErrorComponent text={errorText}/>}
      </div>
  )
}
