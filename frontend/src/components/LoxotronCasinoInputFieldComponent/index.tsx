import './inputField.sass'
import React from 'react';

interface InputProps {
  className?: string
  type: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const LoxotronCasinoInputFieldComponent: React.FC<InputProps> = (props: InputProps) => {
  return <input
    type={props.type}
    className={props.className}
    value={props.value}
    onChange={props.onChange}
  />
}

export default LoxotronCasinoInputFieldComponent;
