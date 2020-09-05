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

	public normalize(): Matrix {
		const result = Matrix.createNull(this.rows + 1, this.cols + 1);

		for (let r = 0; r < result.rows; r++) {
			for (let c = 0; c < result.cols; c++) {
				result.m[r][c] = this.m[r][c];
			}
		}

		result.m[result.rows - 1][result.cols - 1] = 1;
		return result;
	}

	public static add(m1: Matrix, m2: Matrix): Matrix {
		if (m1.rows !== m2.rows || m1.cols !== m2.cols) throw new Error('Matrices are not the same size.');

		const result = Matrix.createNull(m1.rows, m1.cols);

		for (let r = 0; r < result.rows; r++) {
			for (let c = 0; c < result.cols; c++) {
				result.m[r][c] = m1.m[r][c] + m2.m[r][c];
			}
		}

		return result;
	}

	public static sub(m1: Matrix, m2: Matrix): Matrix {
		if (m1.rows !== m2.rows || m1.cols !== m2.cols) throw new Error('Matrices are not the same size.');

		const result = Matrix.createNull(m1.rows, m1.cols);

		for (let r = 0; r < result.rows; r++) {
			for (let c = 0; c < result.cols; c++) {
				result.m[r][c] = m1.m[r][c] - m2.m[r][c];
			}
		}

		return result;
	}

	public static mult(a: Matrix, b: Matrix): Matrix {
		if (a.cols !== b.rows) throw new Error('');

		const result = Matrix.createNull(a.rows, b.cols);

		for (let ar = 0; ar < a.rows; ar++) {
			for (let bc = 0; bc < b.cols; bc++) {
				for (let i = 0; i < a.cols; i++) {
					result.m[ar][bc] += a.m[ar][i] * b.m[i][bc];
				}
			}
		}

		return result;
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