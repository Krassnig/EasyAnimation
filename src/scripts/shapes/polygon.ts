import Canvas, {Drawable} from "../canvas";
import {Config} from "../config";
import Shape from "./shape";
import Matrix from "../matrix";

export class Polygon implements Shape {
    toMatrix(): Matrix {
        return Matrix.createNull(0, 0);
    }

    draw(canvas: Canvas, matrix: Matrix): void {
        const ctx = canvas.c;
        ctx.fillStyle = Config.color;
        ctx.beginPath();
        const startPoint = this._points[0];
        ctx.moveTo(startPoint[0], startPoint[1]);
        for (let i = 1; i < this._points.length; i++) {
            const point1 = this._points[i];
            ctx.lineTo(point1[0], point1[1]);
        }
        ctx.closePath();
        ctx.stroke();
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