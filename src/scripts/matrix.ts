class Matrix {
	private constructor(m: number[][], r: number, c: number) {
		this.m = m;
		this._rows = r;
		this._cols = c;
	}

	private m: number[][];
	private _rows: number;
	private _cols: number;

	public get rows(): number { return this._rows; }
	public get cols(): number { return this._cols; }
	public get(row: number, col: number) {
		return this.m[row][col];
	}

	public static create(matrix: number[][]): Matrix {
		const m = matrix;
		const r = matrix.length;
		const c = matrix.length === 0 ? 0 : matrix[0].length;

		matrix.forEach(v => {
			if (v.length !== c) {
				throw new Error('Non rectangular matrix given.');
			}
		});

		return new Matrix(m, r, c);
	}

	public static createNull(rows: number, cols: number) {
		const m: number[][] = [];
		for (let r = 0; r < rows; r++) {
			m[r] = [];
			for (let c = 0;c < cols; c++) {
				m[r][c] = 0;
			}
		}
		return new Matrix(m, rows, cols);
	}
}

export default Matrix;