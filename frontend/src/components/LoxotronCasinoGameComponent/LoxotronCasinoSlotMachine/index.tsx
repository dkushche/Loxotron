import { useRef, useEffect } from 'react';
import frameUrl from '../../../assets/svg/Frame.svg';
import './slotMachine.sass'
import svg1 from '../../../assets/svg/tiles/1.svg';
import svg2 from '../../../assets/svg/tiles/2.svg';
import svg3 from '../../../assets/svg/tiles/3.svg';
import svg4 from '../../../assets/svg/tiles/4.svg';
import svg5 from '../../../assets/svg/tiles/5.svg';
import svg6 from '../../../assets/svg/tiles/6.svg';
import svg7 from '../../../assets/svg/tiles/7.svg';
import svg8 from '../../../assets/svg/tiles/8.svg';
import svg9 from '../../../assets/svg/tiles/9.svg';
import svg10 from '../../../assets/svg/tiles/10.svg';


const SlotMachineComponent = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current as HTMLCanvasElement;
        const context = canvas.getContext("2d");
        const screenWidth = 1572;
        const screenHeight = 622;

        canvas.width = screenWidth;
        canvas.height = screenHeight;

        abstract class DrawableObject {
            abstract draw(x: number, y: number): void;
        }

        class FillObject extends DrawableObject {
            protected width: number = 1480;
            protected height: number = 11;
            protected x: number = 46;

            draw(y: number) {
                if(context) {
                    context.fillStyle = "black";
                    context.fillRect(this.x, y, this.width, this.height);
                }
            }
        }

        class SvgDrawableObject extends DrawableObject {
            protected imageSrc: string;
            protected x: number;
            protected y: number;
            constructor(x: number, y: number, imageSrc: string) {
                super();
                this.imageSrc = imageSrc;
                this.x = x;
                this.y = y;
            }
            draw() {
                if(context) {
                    const img = new Image();
                    img.src = this.imageSrc;
                    context.drawImage(
                      img,
                      this.x,
                      this.y,
                    )
                }
            }


        }

        class Reel {
            private spaceY = 50;
            private tileSide: number = 250;
            private column: SvgDrawableObject[] = [];
            static Reel: CanvasRenderingContext2D = canvas.getContext("2d")!;
            private tilesPaths = [
                svg1,
                svg2,
                svg3,
                svg4,
                svg5,
                svg6,
                svg7,
                svg8,
                svg9,
                svg10
            ];

            constructor(x: number, speed: number) {
                for(let i = 0; i < 10; i++) {
                    const tile = new SvgDrawableObject(
                      x,
                      (i + 2) * this.tileSide  * this.spaceY,
                      this.tilesPaths[i]
                    )
                }
            }

            drawReel() {
                for(let tile of this.column) {
                    tile.draw();
                }
            }

        }

        class SlotMachine {
            private frame = new SvgDrawableObject(0 , 0, frameUrl);
            private bumper = new FillObject();
            private reel1 = new Reel(60, 100);
            constructor() {
                this.frame.draw();
                this.bumper.draw(0);
                this.bumper.draw(612);
                this.reel1.drawReel();
            }
        }

        const slotMachine = new SlotMachine();
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} id={"screen"}/>
        </div>
    );
};

export default SlotMachineComponent;
