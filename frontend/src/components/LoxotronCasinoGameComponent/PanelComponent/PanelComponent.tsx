import React from 'react';
import './panel.sass';
import SmallLogo from '../../../assets/svg/SmallLogo.svg';
import FirstGame from '../../../assets/svg/FirstGame.svg';
import Marker from '../../../assets/svg/Marker.svg';

const PanelComponent = () => {
  return (
    <div className='panel'>
      <div className='logo'>
        <SmallLogo/>
      </div>
      <div className='icon'>
        <FirstGame />
      </div>
      <div className='marker'>
        <Marker />
      </div>
    </div>
  );
};

export default PanelComponent;
