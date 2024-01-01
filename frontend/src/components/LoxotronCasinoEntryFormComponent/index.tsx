import './entryForm.sass'
import LoxotronCasinoInputFieldComponent from '../LoxotronCasinoInputFieldComponent';
import LoxotronCasinoButtonComponent from '../LoxotronCasinoButtonComponent';

type EntryFormProps = {
  title: string,
  backendEndpoint: string,
  supportMessage: {
    text: string,
    link: string
  }
}

function LoxotronCasinoEntryFormComponent(props: EntryFormProps) {
  return (
      <div className="LoxotronCasinoEntryFormComponent">
        <h1>{props.title}</h1>
        <form>
          <ul>
            <li className="list1">
              <label htmlFor="Login" className="LoginLabel">Login</label>
              <div className="LoginInput">
                <LoxotronCasinoInputFieldComponent />
              </div>
            </li>
            <li className="list2">
              <label className="PasswordLabel">Password:</label>
              <div className="PasswordInput">
                <LoxotronCasinoInputFieldComponent />
              </div>
            </li>
          </ul>
        </form>
        <div className="buttonComponent">
          <LoxotronCasinoButtonComponent text="Continue"/>
        </div>
        <div className="supportMessage">
          <span className="text">{props.supportMessage.text}</span>
          <span className="link">{props.supportMessage.link}</span>
        </div>
      </div>
)
}

export default LoxotronCasinoEntryFormComponent;
