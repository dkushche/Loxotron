import React from 'react';
import PanelComponent from '../PanelComponent/PanelComponent';
import SpinButton from '../../../assets/svg/SpinButton.svg';
import './gameComponent.sass'
import FrameComponent from '../FrameComponent/FrameComponent';

const GameComponent: React.FC = () => {
  return (
    <div className="gameComponent">
      <PanelComponent />
      <div className='spinButton'>
        <SpinButton />
      </div>
      <div className='frame'>
        <FrameComponent />
      </div>
    </div>
  );
}

export default GameComponent;
