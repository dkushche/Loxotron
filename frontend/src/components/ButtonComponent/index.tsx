import { type } from 'os';
import React from 'react';

import './button.sass';

interface buttonProps {
    text: string
}

function ButtonComponent(props: buttonProps): JSX.Element {
    return (
        <button className='ButtonComponent'>{props.text}</button>
    );
  }


export default ButtonComponent;

