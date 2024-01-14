import React from 'react';
import PanelComponent from '../PanelComponent/PanelComponent';
import SpinButton from '../../../assets/svg/SpinButton.svg';
import './gameComponent.sass';
import Frame from '../../../assets/svg/Frame.svg';

const GameComponent: React.FC = () => {
  return (
    <div className='gameComponent'>
      <PanelComponent />
      <div className='spinButton'>
        <SpinButton />
      </div>
      <div className='frame'>
        <Frame />
      </div>
    </div>
  );
}

export default GameComponent;
