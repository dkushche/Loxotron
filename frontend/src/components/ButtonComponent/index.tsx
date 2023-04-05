import { type } from 'os';
import React from 'react';

type Prors = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {}

const Button = ( props: Prors ) =>{
    return (
        <button{...props}/>
    );
    }

export default Button;
