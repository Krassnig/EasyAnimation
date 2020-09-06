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
	private preview: Boolean = false;
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
	public showPreview(): Animator{
		this.preview = true;
		return this;
	}
	public animate(seconds: number): Animator {
		this.tstack.push([this.mnext, seconds]);
		this.mnext = Matrix.createIdentity(3);
		return this;
	}

	public async finalize(): Promise<Animator> {
		const step = this.tstack[0];
		await this.doStep(this.shape.toVectorList(), step);

		return this;
	}

	private async doStep(start: Matrix, step: [Matrix, number]): Promise<Matrix> {
		const framecount = step[1] * Config.frameRate;
		const waitframe = 1000 / Config.frameRate;

		const a = Matrix.specialMult(step[0], start);
		const b = Matrix.sub(a, start);
		const unit = Matrix.div(b, framecount);
		let next = start;

		for (let f = 0; f < framecount; f++) {
			this.canvas.clear();
			this.shape.draw(this.canvas, next);
			if(this.preview) this.shape.preview(this.canvas, Matrix.specialMult(step[0], this.shape.toVectorList()));
			next = Matrix.add(next, unit);

			await Task.delay(waitframe);
		}

		return next;
	}
}