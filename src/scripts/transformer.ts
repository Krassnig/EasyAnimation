import Matrix from "./matrix";

class Transformer {
	private constructor() { }

	private m: Matrix = Matrix.createIdentity(3);

	public translate(x: number, y: number): Transformer {
		this.m = Matrix.mult(Matrix.create([
			[1, 0, x],
			[0, 1, y],
			[0, 0, 1]
		]), this.m);
		return this;
	}

	public rotate(a: number): Transformer {
		this.m = Matrix.mult(Matrix.create([
			[Math.cos(a), -Math.sin(a), 0],
			[Math.sin(a),  Math.cos(a), 0],
			[          0,            0, 1]
		]), this.m);
		return this;
	}

	public scale(k: number): Transformer {
		this.m = Matrix.mult(Matrix.create([
			[k, 0, 0],
			[0, k, 0],
			[0, 0, k]
		]), this.m);
		return this;
	}
}