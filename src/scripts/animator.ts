import Canvas from "./canvas";
import Shape from "./shapes/shape";
import Matrix from "./matrix";
import { Config } from "./config";
import Task from "./task";

export class Animator {
	public constructor(canvas: Canvas, shape: Shape) {
		this.canvas = canvas;
		this.shape = shape;
		this.tstack = [];
		this.mnext = Matrix.createIdentity(3);
	}

	private canvas: Canvas;
	private shape: Shape;
	private tstack: [Matrix, number][];
	private mnext: Matrix;

	public translate(x: number, y: number): Animator {
		this.mnext = Matrix.mult(Matrix.create([
			[1, 0, x],
			[0, 1, y],
			[0, 0, 1]
		]), this.mnext);
		return this;
	}

	public rotate(a: number): Animator {
		this.mnext = Matrix.mult(Matrix.create([
			[Math.cos(a), -Math.sin(a), 0],
			[Math.sin(a),  Math.cos(a), 0],
			[          0,            0, 1]
		]), this.mnext);
		return this;
	}

	public scale(k: number): Animator {
		this.mnext = Matrix.mult(Matrix.create([
			[k, 0, 0],
			[0, k, 0],
			[0, 0, 1]
		]), this.mnext);
		return this;
	}

	public animate(seconds: number): void {
		this.tstack.push([this.mnext, seconds]);
		this.mnext = Matrix.createIdentity(3);
	}

	public async finalize(): Promise<void> {
		await this.doStep(this.shape.toMatrix(), this.tstack[0]);
	}

	private async doStep(start: Matrix, step: [Matrix, number]): Promise<Matrix> {
		const framecount = step[1] * Config.frameRate;
		const waitframe = 1000 / Config.frameRate;

		const unit = Matrix.div(Matrix.sub(Matrix.mult(start, step[0]), start), framecount);
		let next = start;

		for (let f = 0; f < framecount; f++) {
			this.canvas.clear();
			this.shape.draw(this.canvas, start);
			next = Matrix.add(next, unit);

			await Task.delay(waitframe);
		}

		return next;
	}
}