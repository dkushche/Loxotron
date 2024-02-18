import React from 'react';
import { ReactComponent as SpinButton } from '../../assets/svg/SpinButton.svg';
import './spinButton.sass';

interface SpinButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

const SpinButtonComponent = (props: SpinButtonProps) => {
    return (
        <button className='spin' onClick={props.onClick}>
            <SpinButton />
        </button>
    );
};

export default SpinButtonComponent;
