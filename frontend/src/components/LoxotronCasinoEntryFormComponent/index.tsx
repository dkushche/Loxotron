import './entryForm.sass'
import LoxotronCasinoInputFieldComponent from '../LoxotronCasinoInputFieldComponent';
import LoxotronCasinoButtonComponent from '../LoxotronCasinoButtonComponent';
import { useNavigate } from 'react-router-dom';

type EntryFormProps = {
  title: string,
  supportMessage: {
    text: string,
    textForLink: string,
    link: string
  },
  username: string,
  password: string,
  onChange1: React.FormEventHandler<HTMLInputElement>,
  onChange2: React.FormEventHandler<HTMLInputElement>,
  onSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function LoxotronCasinoEntryFormComponent(props: EntryFormProps) {
  const history = useNavigate();
  function handleLinkClick() {
    history(`/${props.supportMessage.link}`)
  }
  return (
    <div className="LoxotronCasinoEntryFormComponent">
      <h1>{props.title}</h1>
      <form>
        <ul>
          <li className="list1">
            <label htmlFor="Login" className="LoginLabel">Login</label>
            <div className="LoginInput">
              <LoxotronCasinoInputFieldComponent className="LoginInput" type="text" value={props.username} onChange={props.onChange1} />
            </div>
          </li>
          <li className="list2">
            <label className="PasswordLabel">Password:</label>
            <div className="PasswordInput">
              <LoxotronCasinoInputFieldComponent className="Passwordinput" type="password" value={props.password} onChange={props.onChange2} />
            </div>
          </li>
        </ul>
      </form>
      <div className="buttonComponent">
        <LoxotronCasinoButtonComponent text="Continue" onClick={props.onSubmit}/>
      </div>
      <div className="supportMessage">
        <span className="text">{props.supportMessage.text}</span>
        <span className="link" onClick={handleLinkClick}>{props.supportMessage.textForLink}</span>
      </div>
    </div>
  )
}

export default LoxotronCasinoEntryFormComponent;
