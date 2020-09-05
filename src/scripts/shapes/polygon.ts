import Canvas, {Drawable} from "../canvas";
import {Config} from "../config";
import Shape from "./shape";
import Matrix from "../matrix";

export class Polygon implements Shape {
    toMatrix(): Matrix {
        return Matrix.create(this._points).transpose().normalize();
    }

    draw(canvas: Canvas, matrix: Matrix): void {
        console.log(matrix);
        const ctx = canvas.c;
        ctx.fillStyle = Config.color;
        ctx.beginPath();
        const startPoint = matrix;
        console.log(matrix.get(0, 0), matrix.get(1, 0));
        ctx.moveTo(matrix.get(0, 0), matrix.get(1, 0));
        for (let i = 0; i < matrix.cols-1; i++) {
            ctx.lineTo(matrix.get(0, i), matrix.get(1, i));
            console.log(matrix.get(0, i), matrix.get(1, i));
        }
/*        for (let i = 1; i < this._points.length; i++) {
            const point1 = this._points[i];
            ctx.lineTo(point1[0], point1[1]);
        }*/
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