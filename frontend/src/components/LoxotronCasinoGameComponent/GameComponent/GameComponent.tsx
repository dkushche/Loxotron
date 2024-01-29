import React, {useState} from 'react';
import PanelComponent from '../PanelComponent/PanelComponent';
import './gameComponent.sass';
import Frame from '../../../assets/svg/Frame.svg';
import InfoPanel from '../../../assets/svg/GameChipsInfoRec.svg';
import SpinButtonComponent from "../../LoxotronCasinoSpinButtonComponent";
import axios from "axios";
import config from "../../../config";
import SlotMachineComponent from "../LoxotronCasinoSlotMachine";
import "../LoxotronCasinoSlotMachine/slotMachine.sass"
import "../LoxotronCasinoSlotMachine/SlotMachine"

const GameComponent: React.FC = () => {
    const [serverResponse, setServerResponse] = useState<number | string>("");
    const [resultMessage, setResultMessage] = useState("");

    const winValues = [
        0,
        11111, 22222, 33333,
        44444, 55555, 66666,
        77777, 88888, 99999,
    ];

    const handleServerResponse = (response: number) => {
        setServerResponse(response);

        const isWin: boolean = winValues.includes(response);

        setResultMessage(isWin ? "You win" : "You lose");
    };

    async function req() {
        await axios.get(`${config.backend_url}/spin`, {
            withCredentials: true
        })
            .then(res => {
                const serverValue: number = res.data.spinResult;
                handleServerResponse(serverValue)
            })
            .catch((err) => console.log(err))
    }

    const resultH1 = `<h1 class='result' style='color: white'>${resultMessage}</h1>`;

    return (
    <div className='gameComponent'>
      <PanelComponent />
      <div className='spinButton'>
          <SpinButtonComponent onClick={req} />
      </div>
      <div className='frame'>
        <Frame />
          <SlotMachineComponent />
      </div>
      <div className='infoPanel'>
        <InfoPanel />
          <div dangerouslySetInnerHTML={{ __html: resultH1 }}/>
      </div>
    </div>
  );
}

export default GameComponent;