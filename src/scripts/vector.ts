import Matrix from "./matrix";

export class Vector extends Matrix {
    protected constructor(vector: number[]) {
        super([vector], 1, vector.length);
    }

    public homogenize(): Vector {
        const result = [];
        for (let i = 0; i < this.cols; i++) {
            result[i] = this.get(i);
        }
        result.push(1);
        return Vector.createVector(result);
    }

    public get(col: number): number {
        return super.get(0, col);
    }

    public static createVector(vector: number[]): Vector {
        return new Vector(vector);
    }

    public static createVectorList(vectors: number[][]): Vector[] {
        const result = [];
        for (let i = 0; i < vectors.length; i++) {
            result[i] = Vector.createVector(vectors[i]);
        }
        return result;
    }
}

export class Vector2D extends Vector {
    private constructor(vector2D: number[]) {
        super(vector2D);
    }

    public static createVector2D(x: number, y: number) {
        return new Vector2D([x, y]);
    }
}