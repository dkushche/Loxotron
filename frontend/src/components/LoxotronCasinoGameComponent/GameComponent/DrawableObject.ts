export class Screen {
    readonly width: number;
    readonly height: number;
    readonly context: CanvasRenderingContext2D;

    constructor(width: number, height: number, canvas: HTMLCanvasElement) {
        this.context = canvas.getContext("2d")!;
        this.width = width;
        this.height = height;

        canvas.width = this.width;
        canvas.height = this.height;
    }
}

export abstract class DrawableObject {
    public static screen: Screen | null = null;

    abstract draw(): void;
}

export class FillObject extends DrawableObject {
    private x: number;
    private y: number;
    private width: number;
    private height: number;

    constructor(x:number, y: number, width: number, height: number) {
        super();
        this.y = y;
        this.x = x;
        this.height = height;
        this.width = width;
    }

    draw() {
        DrawableObject.screen!.context.fillStyle = "#0A0A0A";
        DrawableObject.screen!.context.fillRect(
            this.x, this.y, this.width, this.height
        );
    }
}

export class Bumper extends FillObject {
    constructor(y: number) {
        super(46, y, 1479, 11);
    }
}

export class SvgDrawableObject extends DrawableObject {
    private image: HTMLImageElement;
    public x: number;
    public y: number;

    constructor(x: number, y: number, imageSrc: string) {
        super();
        this.image = new Image();
        this.image.src = imageSrc;
        this.x = x;
        this.y = y;
    }
    draw() {
        DrawableObject.screen!.context.drawImage(this.image, this.x, this.y)
    }
}
