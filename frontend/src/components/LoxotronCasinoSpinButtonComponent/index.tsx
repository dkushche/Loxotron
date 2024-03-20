import React from 'react';
import { ReactComponent as SpinButton } from '../../assets/svg/SpinButton.svg';
import './spinButton.sass';

interface SpinButtonProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>,
    disabled?: boolean
}

const SpinButtonComponent = (props: SpinButtonProps) => {
    
    return (
        <button className='spin' onClick={props.onClick} disabled={props.disabled}>
            <SpinButton />
        </button>
    );
};

export default SpinButtonComponent;
