import { useRef, useEffect } from 'react';
import frameUrl from '../../../assets/svg/Frame.svg';
import './slotMachine.sass'

const SlotMachineComponent = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        canvas.width = 1572;
        canvas.height = 622;

        if (!ctx) return;

        let frame_img = new Image();
        frame_img.src = frameUrl;

        frame_img.onload = () => {
            ctx.drawImage(frame_img, 0, 0, canvas.width, canvas.height);
        }
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default SlotMachineComponent;
