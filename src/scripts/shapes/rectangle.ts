import Canvas from "../canvas";
import Shape, {DrawType} from "./shape";
import Matrix from "../matrix";
import {Config} from "../config";
import {Vector} from "../vector";

export class Rectangle implements Shape {
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

    draw(canvas: Canvas, vectorList: Matrix, color: string = Config.color, drawType: DrawType = DrawType.FILL): void {
        const ctx = canvas.c;
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        console.log(color);
        ctx.beginPath();
        ctx.moveTo(vectorList.get(0, 0), vectorList.get(1, 0));

        for (let i = 0; i < vectorList.cols; i++) {
            ctx.lineTo(vectorList.get(0, i), vectorList.get(1, i));
        }

        ctx.closePath();
        if (drawType === DrawType.FILL) ctx.fill();
        else if (drawType === DrawType.STROKE) ctx.stroke();
        else throw new Error("Unknown DrawType " + drawType);
    }

    toVectorList(): Matrix {
        return Matrix.create([
            [this.x, this.y],
            [this.x + this.width, this.y],
            [this.x + this.width, this.y + this.height],
            [this.x, this.y + this.height]
        ]).transpose().normalizeAsVectorList();
    }
}