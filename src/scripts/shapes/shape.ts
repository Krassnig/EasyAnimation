import Canvas from "../canvas";
import Matrix from "../matrix";
import {Config} from "../config";

export default abstract class Shape {
    draw(canvas: Canvas, vectorList: Matrix, color: string = Config.color, drawType: DrawType = DrawType.STROKE): void { }

    abstract toVectorList(): Matrix;
}

export enum DrawType {
    STROKE, FILL
}