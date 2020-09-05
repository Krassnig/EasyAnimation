class Transformer {
	private constructor() {
		
	}

	public translate(x: number, y: number): Transformer {
		return this;
	}

	public rotate(a: number): Transformer {
		return this;
	}

	public scale(k: number): Transformer {
		return this;
	}
}