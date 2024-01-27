import React from 'react';
import SpinButton from '../../assets//svg/SpinButton.svg';
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
