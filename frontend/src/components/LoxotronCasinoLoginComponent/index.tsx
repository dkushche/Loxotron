import LoxotronCasinoEntryFormComponent from '../LoxotronCasinoEntryFormComponent';
import './login.sass'

export default function LoginComponent(): JSX.Element {
  return (
      <div className='login'>
        <LoxotronCasinoEntryFormComponent
          title={"Sign in"}
          backendEndpoint={'http://api.loxotron.com/login'}
          supportMessage={{
            text: "No account?",
            link: "Create one"
          }}
        />
      </div>
  )
}
