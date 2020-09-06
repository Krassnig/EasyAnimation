import Canvas, {Drawable} from "../canvas";
import {Config} from "../config";
import Shape from "./shape";
import Matrix from "../matrix";

export class Polygon implements Shape {
    preview(canvas: Canvas, mnext: Matrix): void {
    }
    toVectorList(): Matrix {
        return Matrix.create(this._points).transpose().normalizeAsVectorList();
    }

    draw(canvas: Canvas, matrix: Matrix): void {
        const c = canvas.c;
		c.fillStyle = Config.color;
		
        c.beginPath();
		c.moveTo(matrix.get(0, 0), matrix.get(1, 0));
		
        for (let i = 0; i < matrix.cols; i++) {
            c.lineTo(matrix.get(0, i), matrix.get(1, i));
		}
		
        c.closePath();
        c.stroke();
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