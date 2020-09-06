import Shape from "./shape";
import Canvas from "../canvas";
import Matrix from "../matrix";

class Circle implements Shape {
	draw(canvas: Canvas, vectorList: Matrix): void {
		throw new Error("Method not implemented.");
	}
	toVectorList(): Matrix {
		throw new Error("Method not implemented.");
	}
	preview(canvas: Canvas, mnext: Matrix): void {
		throw new Error("Method not implemented.");
	}

}

export default Circle;