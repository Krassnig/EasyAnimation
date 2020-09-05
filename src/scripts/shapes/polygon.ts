import Canvas, {Drawable} from "../canvas";
import {Config} from "../config";

export class Polygon implements Drawable {

    draw(canvas: Canvas): void {
        const ctx = canvas.c;
        ctx.fillStyle = Config.color;
        ctx.beginPath();
        const startPoint = this._points[0];
        ctx.moveTo(startPoint[0], startPoint[1]);
        for (let i = 1; i < this._points.length; i++) {
            const point1 = this._points;
        }
        ctx.lineTo(100,50);
        ctx.lineTo(50, 100);
        ctx.lineTo(0, 90);
        ctx.closePath();
        ctx.fill();
    }

    constructor(points: [number, number][]) {
        this._points = points;
    }

    private readonly _points: [number, number][];

    public getPoint(index: number): [number, number] {
        return this._points[index];
    }

    public getPointsLength(): number {
        return this._points.length;
    }
}