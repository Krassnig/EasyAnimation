import Matrix from "./matrix";

export class Vector extends Matrix {
    protected constructor(vector: number[][]) {
        super(vector, 1,  vector[0].length);
    }

    public homogenize(): Vector {
        const result = [];
        for (let i = 0; i < this.cols; i++) {
            result[i] = this.get(i);
        }
        result.push(1);
        return Vector.createVector(result);
    }

    public get(col: number, row: number= 0): number {
        return super.get(row, col);
    }

    public static createVector(vector: number[]): Vector {
        return new Vector([vector]);
    }
}

export class Vector2D extends Vector {
    private constructor(vector2D: number[][]) {
        super(vector2D);
    }

    public static createVector2D(x: number, y: number) {
        return new Vector2D([[x, y]]);
    }
}