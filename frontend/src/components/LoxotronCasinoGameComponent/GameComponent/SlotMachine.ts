import frameUrl from "../../../assets/svg/Frame.svg";
import camera from "../../../assets/svg/tiles/1.svg";
import saxophone from "../../../assets/svg/tiles/2.svg";
import hat from "../../../assets/svg/tiles/3.svg";
import glasses from "../../../assets/svg/tiles/4.svg";
import mask from "../../../assets/svg/tiles/5.svg";
import pipe from "../../../assets/svg/tiles/6.svg";
import house from "../../../assets/svg/tiles/7.svg";
import manHat from "../../../assets/svg/tiles/8.svg";
import car from "../../../assets/svg/tiles/9.svg";
import perfume from "../../../assets/svg/tiles/10.svg";
import { DrawableObject } from "./DrawableObject";
import { Screen, SvgDrawableObject, FillObject, Bumper } from "./DrawableObject";
import React from "react";

class Tile extends SvgDrawableObject {
    static side = 250;
    static space = 50;
    static amount = 1;
    static margin = 32;
    
    move(deltaY: number) {
        this.y += deltaY;

        const teleport = Tile.amount * (Tile.side + Tile.space);
        const leftBottom = this.y + Tile.side;

        if(leftBottom >= teleport) {
            this.y = 0 - Tile.side + (leftBottom - teleport);
        }
    }

    override draw() {
        if(0 <= this.x + Tile.side && this.x < DrawableObject.screen!.width
        && 0 <= this.y + Tile.side && this.y < DrawableObject.screen!.height
    ) {
        super.draw();
      }
    }
}

class Reel {
    static winPos = 1 * (Tile.side + Tile.space) - Math.floor(Tile.side / 2);
    static tilesPaths = [
        camera, pipe, saxophone, hat, glasses,
        mask, house, manHat, car, perfume
    ];
    static space = 27.5;
    static width = Tile.side;
    static margin = 102;

    private column: Tile[] = [];
    private speed: number;
    
    constructor(x: number, speed: number, state: string) {
        Tile.amount = 10;

        for(let i = 0; i < 10; i++) {
            this.column.push(
                new Tile(
                    x,
                    i * (Tile.side + Tile.space) - Math.floor(Tile.side / 2),
                    Reel.tilesPaths[i]
                )
            )
        }
        this.speed = (-state + 1) * (Tile.side + Tile.space);
        this.move();
        this.speed = speed;
    }

    draw() {
        for(let tile of this.column) {
            tile.draw();
        }
    }

    move(winIdx: number | null = null): boolean | undefined {
        if(winIdx === null || this.column[winIdx].y !== Reel.winPos) {
            let currentSpeed = this.speed;

            if(winIdx !== null) {
                if(this.column[winIdx].y < Reel.winPos &&
                    this.column[winIdx].y + currentSpeed > Reel.winPos) {
                    currentSpeed = Reel.winPos - this.column[winIdx].y;
                }
            }

            for(let tile of this.column) {
                tile.move(currentSpeed);
            }
            
            return true;
        }

        return false;
    }

}

class SlotMachine {
    private reels: Reel[];
    private topBumper: Bumper;
    private bottomBumper: Bumper;
    private frame: SvgDrawableObject;
    private background: FillObject;

    constructor(
        canvas: HTMLCanvasElement,
        state: string,
        setSlotMachineState: React.Dispatch<React.SetStateAction<string>>
    ) {
        this.reels = [];
        this.topBumper = new Bumper(0);
        this.bottomBumper = new Bumper(612);
        
        this.frame = new SvgDrawableObject(0, 0, frameUrl);
        
        const screen = new Screen(1572, 622, canvas);
        this.background = new FillObject(0, 0, screen.width, screen.height)
        DrawableObject.screen = screen;

        let newState = "";

        if (state === "") {
            for (let i = 0; i < 5; i++) {
                newState += Math.floor(Math.random() * 9);
            }
            setSlotMachineState(newState);
        } else {
            newState = state;
        }

        for(let i = 0; i < 5; i ++) {
            this.reels.push(new Reel(
                Reel.margin + i * (Reel.width + Reel.space),
                3 + Math.ceil(Math.random() * 3),
                newState[i]
            ))
        }
    }

    draw() {
        this.background.draw();
        
        for(let reel of this.reels) {
            reel.draw();
        }

        this.bottomBumper.draw();
        this.topBumper.draw();
        this.frame.draw();
    }

    move(winSeq: string | null = null) {
        let moving = false;

        for(let i = 0; i < 5; i++) {
            let winIdx = null;

            if(winSeq) {
                winIdx = +winSeq[i];
            }

            if(this.reels[i].move(winIdx)) {
                moving = true;
            }
        }

        return moving;
    }
}

export default SlotMachine;
