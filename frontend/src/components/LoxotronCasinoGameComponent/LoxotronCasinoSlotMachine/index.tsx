import { useRef, useEffect } from 'react';
import './slotMachine.sass';
import SlotMachine from "./SlotMachine";

const SlotMachineComponent = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current as HTMLCanvasElement;
        const slotMachine = new SlotMachine(canvas);
        slotMachine.draw();
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} id={"screen"}/>
        </div>
    );
};

export default SlotMachineComponent;
