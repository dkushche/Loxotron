import React from 'react';
import PanelComponent from '../PanelComponent/PanelComponent';
import SpinButton from '../../../assets/svg/SpinButton.svg';
import './gameComponent.sass'

const GameComponent: React.FC = () => {
  return (
    <div className="game-component">
      <PanelComponent />
      <div className='spinButton'>
        <SpinButton />
      </div>
    </div>
  );
}

export default GameComponent;
