import Canvas, {Drawable} from "../canvas";

export class Rectangle implements Drawable{
    draw(canvas: Canvas): void {
        //canvas.drawRect();
    }
    constructor(x: number, y: number, w: number, h: number) {
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
    }
    private x: number;
    private y: number;
    private width: number;
    private height: number;
}