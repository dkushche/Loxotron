import React from 'react';
import PanelComponent from '../PanelComponent/PanelComponent';
import SpinButton from '../../../assets/svg/SpinButton.svg';
import './gameComponent.sass';
import Frame from '../../../assets/svg/Frame.svg';
import InfoPanel from '../../../assets/svg/GameChipsInfoRec.svg';

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
      <div className='infoPanel'>
        <InfoPanel />
      </div>
    </div>
  );
}

export default GameComponent;
