import React from 'react';
import PanelComponent from '../PanelComponent/PanelComponent';
import SpinButton from '../../../assets/svg/SpinButton.svg';
import './gameComponent.sass';
import Frame from '../../../assets/svg/Frame.svg';
import InfoPanel from '../../../assets/svg/GameChipsInfoRec.svg';
import SpinButtonComponent from "../../LoxotronCasinoSpinButtonComponent";
import axios from "axios";
import config from "../../../config";
import {useNavigate} from "react-router-dom";

const GameComponent: React.FC = () => {
    const history = useNavigate();
    async function req() {
        await axios.get(`${config.backend_url}/spin`, {
            withCredentials: true
        })
            .then(res => console.log(res.data.spinResult))
            .catch((err) => console.log(err))
    }
  return (
    <div className='gameComponent'>
      <PanelComponent />
      <div className='spinButton'>
          <SpinButtonComponent onClick={req} />
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
