import Shape from "./shape";
import Canvas from "../canvas";
import Matrix from "../matrix";
import { Vector, Vector2D } from "../vector";

class Circle implements Shape {
	public constructor(center: [number, number], radius: number) {
		this.vectors = [
			Vector2D.createVector2D(...center),
			Vector2D.createVector2D(center[0], center[0] + radius)
		];
	}

	private vectors: Vector2D[];

	draw(canvas: Canvas, vectorList: Matrix): void {
		
		
	}
	toVectorList(): Matrix {
		throw new Error('Not Implemented');
	}
	preview(canvas: Canvas, mnext: Matrix): void {
		throw new Error("Method not implemented.");
	}

}

export default Circle;