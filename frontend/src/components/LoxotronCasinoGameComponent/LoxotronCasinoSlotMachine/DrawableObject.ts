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

abstract class DrawableObject {
    public static screen: Screen | null = null;

    abstract draw(): void;
}

export class FillObject extends DrawableObject {
    private static width: number = 1479;
    private static height: number = 11;
    private static x: number = 46;
    private y: number;

    constructor(y: number) {
        super();
        this.y = y;
    }

    draw() {
        DrawableObject.screen!.context.fillStyle = "#0A0A0A";
        DrawableObject.screen!.context.fillRect(
            FillObject.x, this.y, FillObject.width, FillObject.height
        );
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

export default DrawableObject;
