import Canvas from "../canvas";
import Matrix from "../matrix";

export default interface Shape {
	draw(canvas: Canvas, matrix: Matrix): void;
	toMatrix(): Matrix;
}