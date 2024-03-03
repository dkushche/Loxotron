import React, {useState} from 'react';
import PanelComponent from '../PanelComponent/PanelComponent';
import './gameComponent.sass';
import {ReactComponent as InfoPanel} from '../../../assets/svg/GameChipsInfoRec.svg';
import SpinButtonComponent from "../../LoxotronCasinoSpinButtonComponent";
import axios from "axios";
import config from "../../../config";
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import SlotMachine from "./SlotMachine";

const GameComponent: React.FC = () => {

    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [spinDisable, setSpinBlock] = useState(false);
    const flipSpinBlock = () => {
      setSpinBlock(!spinDisable);
    }

    let slotMachine: SlotMachine | null = null;
    let startTime = 0;
    let winStr: string | null = null;


    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current as HTMLCanvasElement;
        slotMachine = new SlotMachine(canvas);
        slotMachine.draw();
    }, []);

    const history = useNavigate();

    async function checkToken() {
      await axios.get(`${config.backend_url}/login`, {
        withCredentials: true
      })
        .catch((err) => history('/login'))
    }
    
    checkToken();

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

    function animator() {
      let resStr: string | null = null;

      if(Date.now() - startTime > 3) {
        resStr = winStr;
      }
      let moving = slotMachine?.move(resStr);
      if(moving) {
        slotMachine?.draw();
        requestAnimationFrame(animator);
      } else {
        flipSpinBlock();
      }
    }

    async function request() {
        await axios.get(`${config.backend_url}/spin`, {
            withCredentials: true
        })
            .then(res => {
                const serverValue: number = res.data.spinResult;
                handleServerResponse(serverValue);
                flipSpinBlock();
                startTime = Date.now();
                winStr = serverValue.toString();
                requestAnimationFrame(animator);
            })
            .catch((err) => console.log(err))
    }

    const resultH1 = `<h1 class='result' style='color: white'>${resultMessage}</h1>`;

    return (
    <div className='gameComponent'>
      <PanelComponent />
      <div className='spinButton'>
          <SpinButtonComponent onClick={request} disabled={spinDisable}/>
      </div>
      <div className='frame'>
        <div>
            <canvas ref={canvasRef} id={"screen"}/>
        </div>
      </div>
      <div className='infoPanel'>
        <InfoPanel />
          <div dangerouslySetInnerHTML={{ __html: resultH1 }}/>
      </div>
    </div>
  );
}

export default GameComponent;
