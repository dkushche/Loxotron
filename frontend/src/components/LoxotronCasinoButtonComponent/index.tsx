import React from "react";
import './button.sass'

interface ButtonProps {
    text: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const LoxotronCasinoButtonComponent: React.FC<ButtonProps> = function (props: ButtonProps) {
    return (
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export default LoxotronCasinoButtonComponent;
