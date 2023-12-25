import React from "react";
import './button.sass'

interface ButtonProps {
    text: string;
}

const LoxotronCasinoButtonComponent: React.FC<ButtonProps> = function (props: ButtonProps) {
    return (
        <button>
            {props.text}
        </button>
    )
}

export default LoxotronCasinoButtonComponent;
