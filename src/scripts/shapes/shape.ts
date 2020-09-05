import Canvas from "../canvas";
import Matrix from "../matrix";

export default interface Shape {
	draw(canvas: Canvas, vectorList: Matrix): void;
	toVectorList(): Matrix;
}