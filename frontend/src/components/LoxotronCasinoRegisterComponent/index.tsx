import LoxotronCasinoEntryFormComponent from '../LoxotronCasinoEntryFormComponent';
import './register.sass'

export default function RegisterComponent(): JSX.Element {
  return (
    <div className="register">
      <LoxotronCasinoEntryFormComponent
        title={'Create account'}
        backendEndpoint={'http://api.loxotron.com/register'}
        supportMessage={{
          text: "Have an account?",
          link: "Log in"
        }}
      />
    </div>
  )
}
