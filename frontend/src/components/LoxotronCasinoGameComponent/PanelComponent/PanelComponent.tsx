import React from 'react';
import './panel.sass';
import { ReactComponent as SmallLogo} from '../../../assets/svg/SmallLogo.svg';
import { ReactComponent as FirstGame} from '../../../assets/svg/FirstGame.svg';
import { ReactComponent as Marker} from '../../../assets/svg/Marker.svg';

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
